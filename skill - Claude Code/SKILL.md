---
name: mongolian-spellcheck
description: Check Mongolian (Cyrillic) text for spelling errors using the dict-mn Hunspell dictionary. Use whenever writing, reviewing, editing or translating Mongolian text, or when the user asks to proofread Mongolian (монгол бичвэрийн алдаа шалгах).
---

# Монгол үгийн алдаа шалгах / Mongolian spellchecking

`dict-mn` толийг ашиглан монгол (кирилл) бичвэрийн үсгийн алдааг шалгана.
Энэ ур чадвар нь AI агентад зориулагдсан бөгөөд [Hunspell](https://hunspell.github.io)
форматын `mn_MN` толийг [spylls](https://github.com/zverok/spylls) сангаар уншиж
ажиллана.

This skill lets an AI coding agent proofread Mongolian Cyrillic text against the
`dict-mn` dictionary. Instructions below are in English because the agent reads
them; user-facing output from the script is Mongolian.

## When to use

Use this skill when the task involves Mongolian Cyrillic text and correctness of
spelling matters:

- proofreading or editing Mongolian prose, documentation or UI strings
- reviewing a translation into Mongolian
- checking Mongolian content in a commit, issue or pull request

Do **not** use it for traditional Mongolian script (ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ) — this
dictionary covers Cyrillic only.

## Setup

```bash
pip install spylls
```

The script finds `mn_MN.dic` / `mn_MN.aff` automatically when run from inside a
`dict-mn` checkout. Otherwise point it at the dictionary explicitly:

```bash
python "skill - Claude Code/check_mn.py" --dict /path/to/mn_MN article.txt
```

## Usage

Check a file:

```bash
python "skill - Claude Code/check_mn.py" article.txt
```

Check text from stdin:

```bash
echo "Монгол хэлний зөв бичих дүрэм" | python "skill - Claude Code/check_mn.py"
```

Each issue is reported as `file:line:column: word -> suggestions`, so the output
can be consumed the same way as a compiler or linter diagnostic. Exit status is
`1` when any misspelling was found and `0` when the text is clean, which makes it
usable in a pre-commit hook or CI step.

For structured output, use `--json`:

```bash
python "skill - Claude Code/check_mn.py" --json article.txt
```

```json
{
  "source": "article.txt",
  "issues": [
    { "word": "сыштрыш", "line": 2, "column": 26, "offset": 55, "suggestions": [] }
  ]
}
```

## Interpreting results

**Not every flagged word is wrong.** Mongolian is agglutinative — a stem takes an
ordered chain of suffixes, so the number of valid surface forms per stem is very
large. A rare but perfectly legal form may be absent from the dictionary, and
proper nouns, loanwords and neologisms are frequently missing by nature.

Treat a report as *candidates for review*, not as a verdict:

- If the word is a name, a loanword or a technical term, it is probably fine.
- If a suggestion differs by one or two letters, it is likely a real typo.
- If no suggestion is offered at all, the string is often not a Mongolian word.

When a genuinely valid word is missing from the dictionary, report it upstream at
https://github.com/bataak/dict-mn/issues — the project accepts word reports in
the form `Мэдэгдсэн үг: <word>`.

## Performance

Loading the dictionary takes several seconds (it holds ~620,000 stems), and that
cost is paid once per process. Check a whole file in a single invocation rather
than calling the script once per word.
