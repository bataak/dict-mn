#!/usr/bin/env python3
"""Check Mongolian (Cyrillic) text against the dict-mn Hunspell dictionary.

Reads a file or stdin, reports every misspelling with its line, column and
suggested corrections. Plain text output by default; ``--json`` emits a
machine-readable report for tools and agents.

Requires spylls (pure-Python Hunspell):  pip install spylls
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys

#: Mongolian Cyrillic word, allowing internal hyphen/apostrophe (сайн-сайхан).
WORD_RE = re.compile(r"[а-яёөүА-ЯЁӨҮ]+(?:['’\-][а-яёөүА-ЯЁӨҮ]+)*")

#: Suffixes attach to numerals and initialisms with a hyphen ("2024-нд",
#: "МУИС-ийн"). The hyphen's left side is not a Cyrillic word, so a naive
#: tokenizer emits the bare suffix and reports it as a misspelling.
ATTACHED_SUFFIX_RE = re.compile(r"(?<![а-яёөүА-ЯЁӨҮ])[-‐‑–—][а-яёөү]+")


def find_dictionary(explicit: str | None) -> str:
    """Locate mn_MN.dic/.aff, returning the path without its extension."""
    candidates = []
    if explicit:
        candidates.append(explicit)
    here = os.path.dirname(os.path.abspath(__file__))
    candidates += [
        os.path.join(here, "..", "mn_MN", "mn_MN"),
        os.path.join(here, "mn_MN"),
        "/usr/share/hunspell/mn_MN",
        "/usr/local/share/hunspell/mn_MN",
        os.path.expanduser("~/Library/Spelling/mn_MN"),
    ]
    for base in candidates:
        base = os.path.splitext(os.path.abspath(base))[0]
        if os.path.exists(base + ".dic") and os.path.exists(base + ".aff"):
            return base
    raise SystemExit(
        "mn_MN.dic/.aff not found. Pass --dict /path/to/mn_MN, or run this from\n"
        "the dict-mn repository so that ../mn_MN/ resolves."
    )


def check(text: str, dictionary, *, max_suggestions: int) -> list[dict]:
    from spylls.hunspell import Dictionary  # noqa: F401  (type only)

    claimed = [m.span() for m in ATTACHED_SUFFIX_RE.finditer(text)]
    line_starts = [0] + [i + 1 for i, ch in enumerate(text) if ch == "\n"]

    def position(offset: int) -> tuple[int, int]:
        lo, hi = 0, len(line_starts) - 1
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if line_starts[mid] <= offset:
                lo = mid
            else:
                hi = mid - 1
        return lo + 1, offset - line_starts[lo] + 1

    seen_ok: set[str] = set()
    issues: list[dict] = []
    for match in WORD_RE.finditer(text):
        start, end = match.span()
        if any(s < end and start < e for s, e in claimed):
            continue
        word = match.group(0)
        if word in seen_ok:
            continue
        if dictionary.lookup(word) or dictionary.lookup(word.lower()):
            seen_ok.add(word)
            continue
        line, column = position(start)
        issues.append({
            "word": word,
            "line": line,
            "column": column,
            "offset": start,
            "suggestions": list(dictionary.suggest(word))[:max_suggestions],
        })
    return issues


def main() -> int:
    ap = argparse.ArgumentParser(description="Mongolian spellchecker (dict-mn + Hunspell)")
    ap.add_argument("file", nargs="?", help="file to check (default: stdin)")
    ap.add_argument("--dict", dest="dict_path", help="path to mn_MN (without extension)")
    ap.add_argument("--json", action="store_true", help="machine-readable output")
    ap.add_argument("-n", "--suggestions", type=int, default=5, help="max suggestions per word")
    args = ap.parse_args()

    try:
        from spylls.hunspell import Dictionary
    except ImportError:
        raise SystemExit("spylls is required:  pip install spylls")

    base = find_dictionary(args.dict_path)
    dictionary = Dictionary.from_files(base)

    text = open(args.file, encoding="utf-8").read() if args.file else sys.stdin.read()
    issues = check(text, dictionary, max_suggestions=args.suggestions)

    if args.json:
        json.dump({"source": args.file or "-", "issues": issues},
                  sys.stdout, ensure_ascii=False, indent=2)
        sys.stdout.write("\n")
    else:
        name = args.file or "-"
        for issue in issues:
            hint = f"  -> {', '.join(issue['suggestions'])}" if issue["suggestions"] else ""
            print(f"{name}:{issue['line']}:{issue['column']}: {issue['word']}{hint}")
        print(f"{len(issues)} алдаа олдлоо." if issues else "Алдаа олдсонгүй.", file=sys.stderr)
    return 1 if issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
