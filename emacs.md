# Emacs дээр ашиглах
Emacs программ дээр монгол үгийн алдаа шалгагч программыг идэвхжүүлэхийн тулд дараах тохиргоог хийнэ.

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
   <iframe src="https://www.youtube.com/embed/6lh9cfodvbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"></iframe>
</div>

1. `hunspell` программ суулгана.
1. `~/.emacs` буюу `~/.emacs.d/init.el` тохиргооны файлаа нээнэ.
1. Дараах кодыг оруулна: англи болон монгол үгийн алдааг зэрэг шалгахаар `~/Library/Spelling` хавтаст mn_MN болон en-GB толиудыг хуулсан байгаа гэж ойлгоё. Тэгвэл

```lisp
(with-eval-after-load "ispell"
  (setenv "DICPATH" "~/Library/Spelling")
  (setenv "LANG" "mn_MN")
  (setq ispell-program-name "/usr/local/bin/hunspell")
  (setq ispell-dictionary "mn_MN,en-GB")
  (setq ispell-personal-dictionary "~/.hunspell_personal")
  (ispell-set-spellchecker-params)
  (ispell-hunspell-add-multi-dic "mn_MN,en-GB"))
```

Ийнхүү программ дахин ачаалмагц алдаа шалгахад бэлэн болно. Алдаа шалгагчийг `tex` файл нээгдэхэд автоматаар ачаалдгаар тохируулж болно, эсвэл `M-x flyspell-mode` хэмээн идэвхжүүлж болно.
