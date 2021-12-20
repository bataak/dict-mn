# Ашиглах заавар

> Толь татаж авахыг хүсвэл [GitHub](https://github.com/bataak/dict-mn){:target="_blank"} сан уруу орно уу.

[Firefox](https://www.mozilla.org/en-US/firefox/new/){:target="_blank"} болон [LibreOffice](https://www.libreoffice.org/){:target="_blank"} дээр түгээмэл ашиглагдаж байгаа төдийгүй үгийн алдаа шалгагч программ болох [Hunspell](http://hunspell.github.io/){:target="_blank"} дэмждэг дурын программд энэхүү толийг ашиглаж боломжтой. Hunspell дэмждэг зарим программаас дурдвал:
1. .NET
1. Chrome
1. Chromium
1. Emacs
1. Firefox
1. gedit
1. Illustrator
1. InDesign
1. Inkscape
1. JetBrains editors (IntelliJ IDEA, PyCharm, CLion, WebStorm, TeXiFy IDEA, ….)
1. Kile
1. LibreOffice
1. LyX
1. Notepad++
1. OnlyOffice
1. OpenOffice
1. Opera
1. QuarkXPress
1. Scribus
1. SDL Trados
1. SeaMonkey
1. Sublime Text
1. Texmaker
1. TeXnicCenter
1. TeXstudio
1. TeXworks
1. Thunderbird
1. Visual Studio Code
1. WinShell

> **АНХААР:** Уг толь нь Hunspell v1.3.3-аас хойших хувилбаруудад ажиллах бөгөөд ашиглахын тулд Windows/macOS/Linux системүүдэд дагалдах монгол үсгийн үндсэн драйверыг сонгоно уу!

Уг толь нь юникод (UTF-8) стандартад нийцүүлэн бүтээгдсэн ба гарын үндсэн бус зарим драйверууд юникод стандартад нийцдэггүй бөгөөд `өүйё` үсгүүдийн кодууд нь тогтсон стандартаас зөрөөтэй байдаг тул таны оруулсан үг хэдий зөв мэт харагдах боловч код зөрүүтэйгээс болоод алдаанд тооцогдох болно.

Интернет хөтөч болох Firefox, баримт боловсруулагч [LibreOffice](https://en.wikipedia.org/wiki/LibreOffice){:target="_blank"}, код засварлагч [Emacs](https://en.wikipedia.org/wiki/Emacs){:target="_blank"}, [Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text){:target="_blank"}, хэвлэлийн эх бэлтгэгч [Adobe InDesign](https://en.wikipedia.org/wiki/Adobe_InDesign){:target="_blank"} болон [LaTeX](https://mn.wikipedia.org/wiki/LaTeX){:target="_blank"} файл засварлагч [TeXstudio](https://en.wikipedia.org/wiki/TeXstudio){:target="_blank"}, [Texmaker](https://en.wikipedia.org/wiki/Texmaker){:target="_blank"} болон захидал боловсруулагч [Thunderbird](https://en.wikipedia.org/wiki/Mozilla_Thunderbird){:target="_blank"} программуудад энэхүү толийг хэрхэн ашиглахыг үзүүлье.

Дээрх программ бүрийн Hunspell алдаа шалгагч, нэгэн ижил толь ашиглалаа ч яг ижил төвшинд ажилладаггүй. Зонхилох ялгаа гэвэл, ихэнх нь холбоо үгийг хамтад нь шалгадаггүй, зөв үгийг санал болгох хувилбар харилцан адилгүй байдаг. Hunspell программ нь Firefox, LibreOffice, болон Emacs дээр бүрэн гүйцэд ажиллаж байна.

Үгийн сан олшрох нь давуу талтай ч гэсэн бас сөрөг тал бий. Тухайлбал, толь хэмээх тогтворгүй н-тэй нэр үгийг харьяалахын тийн ялгалд хувирган бичих болох үед толийн хэмээн тогтворгүй н-гүйгээр андуурч бичсэн тохиолдолд энэ нь алдаанд тооцогдохгүй. Учир нь, энэ тохиолдолд толий хэмээх үйл үг нь үйлийн хам нөхцөл -н авчээ.

```bash
$ hunspell -d src/hunspell/mn_MN,en_US
Hunspell 1.7.0
толийн
+ толий

толины
+ толь
```

Тиймээс алдаа шалгах Hunspell программ нь холбоо үгийн алдааг ([grammar checker](https://en.wikipedia.org/wiki/Grammar_checker){:target="_blank"}) шалгахгүй, зөвхөн үгийн алдааг ([spell checker](https://en.wikipedia.org/wiki/Spell_checker){:target="_blank"}) шалгана гэдгийг ухаарч, санамсаргүй тохиолдолд алдаж бичсэн үг тань зөв хувилсан өөр бусад үгтэй андуурагдаж алдаанд тооцогдохгүй байж болно гэдгийг анхаарах хэрэгтэй.
