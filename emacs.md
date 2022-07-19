# Emacs дээр ашиглах

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
   <iframe src="https://www.youtube.com/embed/6lh9cfodvbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; padding-bottom:20px;"></iframe>
</div>

`Emacs` программаа дараах зааврын дагуу суулгаарай: <https://www.gnu.org/software/emacs/download.html>

`Emacs` программ дээр монгол үгийн алдаа шалгагч программыг идэвхжүүлэхийн тулд дараах тохиргоог хийнэ:

1. `hunspell` программ суулгасан байх ёстой. Хэрхэн суулгах талаарх зааварчилгыг [эндээс](https://github.com/bataak/dict-mn#hunspell-%D1%81%D1%83%D1%83%D0%BB%D0%B3%D0%B0%D1%85){:target="_blank"} авна уу.
1. Монгол үгийн алдаа шалгах толио [эндээс](https://github.com/bataak/dict-mn/blob/main/mn_MN.zip) (mn_MN.aff, mn_MN.dic) татаж авна.
1. Англи үгийн алдаа шалгах толийг [эндээс](https://github.com/LibreOffice/dictionaries/tree/master/en) (en_GB.aff, en_GB.dic) татаж авна.
1. `~/.emacs` буюу `~/.emacs.d/init.el` тохиргооны файлаа нээнэ.
1. Дараах кодыг оруулна: англи болон монгол үгийн алдааг зэрэг шалгахаар `~/Library/Spelling` хавтаст mn_MN болон en-GB толиудыг (*.dic, *.aff) хуулсан байгаа гэж ойлгоё. Тэгвэл

```lisp
(with-eval-after-load "ispell"
  (setenv "DICPATH" "~/Library/Spelling")
  (setenv "LANG" "mn_MN")
  (setq ispell-program-name "/usr/local/bin/hunspell")
  (setq ispell-dictionary "mn_MN,en_GB")
  (setq ispell-personal-dictionary "~/.hunspell_personal")
  (ispell-set-spellchecker-params)
  (ispell-hunspell-add-multi-dic "mn_MN,en_GB"))
```

гэсэн кодыг хуулж хадгална. Ийнхүү программаа дахин ачаалмагц алдаа шалгахад бэлэн болно. Алдаа шалгагчийг өөрийн хүссэн файл нээгдэхэд (жишээ нь `tex`) автоматаар ачаалдгаар тохируулж болно:

```lisp
(add-hook 'LaTeX-mode-hook 'flyspell-mode)
(add-hook 'org-mode-hook 'flyspell-mode)
(add-hook 'text-mode-hook 'flyspell-mode)
```

Эсвэл `M-x flyspell-mode` буюу `flyspell-buffer` горимуудыг идэвхжүүлж, үгийн алдаагаа хянаж болно.
