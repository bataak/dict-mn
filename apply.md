# Ашиглах заавар

[Firefox](https://www.mozilla.org/en-US/firefox/new/){:target="_blank"} болон [LibreOffice](https://www.libreoffice.org/){:target="_blank"} дээр түгээмэл ашиглагдаж байгаа төдийгүй үгийн алдаа шалгагч программ болох [Hunspell](http://hunspell.github.io/){:target="_blank"} дэмждэг дурын программд энэхүү толийг ашиглаж боломжтой. Hunspell дэмждэг зарим программаас дурдвал:
1. .NET
1. Chrome
1. Chromium
1. [Emacs](emacs.html)
1. [Firefox](firefox.html)
1. gedit
1. Illustrator
1. [InDesign](indesign.html)
1. Inkscape
1. JetBrains editors (IntelliJ IDEA, PyCharm, CLion, WebStorm, TeXiFy IDEA, ….)
1. Kile
1. [LibreOffice](libreoffice.html)
1. LyX
1. [Manuskript](http://www.theologeek.ch/manuskript/){:target="_blank"}
1. Notepad++
1. OnlyOffice
1. OpenOffice
1. Opera
1. QuarkXPress
1. Scribus
1. [Scrivener](https://en.wikipedia.org/wiki/Scrivener_(software)){:target="_blank"}
1. SDL Trados
1. SeaMonkey
1. [Sublime Text](sublime.html)
1. [Texmaker](texmaker.html)
1. TeXnicCenter
1. [TeXstudio](texstudio.html)
1. TeXworks
1. [Thunderbird](thunderbird.html)
1. Visual Studio Code
1. WinShell

> **АНХААР:** Уг толь нь Hunspell v1.3.3-аас хойших хувилбаруудад ажиллах бөгөөд ашиглахын тулд Windows/macOS/Linux системүүдэд дагалдах монгол үсгийн үндсэн драйверыг сонгоно уу!

Уг толь нь юникод ([UTF-8](https://en.wikipedia.org/wiki/Cyrillic_script_in_Unicode){:target="_blank"}) стандартад нийцүүлэн бүтээгдсэн ба гарын үндсэн бус зарим драйверууд монгол кирилл үсгийн юникод стандартад нийцдэггүй бөгөөд `өүйё` үсгүүдийн кодууд нь тогтсон стандартаас зөрөөтэй байдаг тул таны оруулсан үг хэдий зөв мэт харагдах боловч код зөрүүтэйгээс болоод алдаанд тооцогдох болно.

Интернет хөтөч болох [Firefox](firefox.html), баримт боловсруулагч [LibreOffice](libreoffice.html), код засварлагч [Emacs](emacs.html), [Sublime Text](sublime.html), хэвлэлийн эх бэлтгэгч [Adobe InDesign](indesign.html) болон [LaTeX](https://mn.wikipedia.org/wiki/LaTeX){:target="_blank"} файл засварлагч [TeXstudio](texstudio.html), [Texmaker](texmaker.html) болон захидал боловсруулагч [Thunderbird](thunderbird.html) программуудад энэхүү толийг хэрхэн ашиглахыг үзүүлье.

Дээрх программ бүрийн Hunspell алдаа шалгагч, нэгэн ижил толь ашиглалаа ч яг ижил төвшинд ажилладаггүй. Зонхилох ялгаа гэвэл, ихэнх нь холбоо үгийг хамтад нь шалгадаггүй, зөв үгийг санал болгох хувилбар харилцан адилгүй байдаг. Hunspell программ нь [Firefox](firefox.html), [LibreOffice](libreoffice.html), болон [Emacs](emacs.html) дээр бүрэн гүйцэд ажиллаж байна.

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

> Толь татаж авахыг хүсвэл [GitHub](https://github.com/bataak/dict-mn){:target="_blank"} сан уруу орно уу.

## Аюулгүй байдал

Энэхүү толийг ашиглахын тулд та заавал интернетэд холбогдсон байх шаардлагагүй гэдэг нь энэхүү толь хувь хүний нууцлалын баталгааг бүрэн хангана гэсэн үг юм. Гагцхүү ашиглаж буй эх бэлтгэх программ тань таны бэлтгэн буй мэдээллийг далд хэлбэрээр цааш дамжуулж буй эсэх асуудал хөндөгдөж болох юм.

Монголд одоогоор ашиглагдаж буй [монгол хэлний дүрмийн алдаа шалгагч](http://spellcheck.gov.mn/){:target="_blank"} зэрэг онлайн хэлбэрээр ажилладаг, [API](https://en.wikipedia.org/wiki/API){:target="_blank"} ашиглан таны бэлтгэж буй эхийг (жишээлбэл: ном болон нууцад хамаарах баримт бичиг) сервер дээрээ боловсруулан хариу буцаах замаар үгийн алдааг шалгаж (spell checker) байгаа программууд нь хувь хүний нууцлалд халдах бүрэн боломжтой. Учир нь таны, алдааг шалгуулахаар оруулсан мэдээллийг тэдгээр программууд сервер дээрээ хадгалан үлдээж байгаа эсэх, түүнийг өөр бусад зорилгоор хэн нэгэн хэзээ нэгэн цагт ашиглах эсэхийг та мэдэхгүй шүү дээ.

Жишээ дурдвал: [Grammarly](https://en.wikipedia.org/wiki/Grammarly){:target="_blank"} онлайн алдаа шалгагч (spelling, grammar, and punctuation check, and plagiarism detection) программын хэрэглэгчийн хувилбарт аюулгүй байдлын хувьд цоорхой илэрч [бүх хэрэглэгчдийнхээ мэдээллийг алдах шахаж байсан](https://www.engadget.com/2018-02-06-grammarly-patches-serious-vulnerability.html){:target="_blank"} билээ.

## Зөвлөгөө

Ном бичигч хүмүүст дараах зөвлөгөөг хүргэж байна:
- Ном бичих нь нэлээд цаг хугацаа шаардах ажил тул ялангуяа зөөврийн компьютер голдуу ашигладаг хүмүүс удаан хугацаанд, өдөр тутамдаа аль болох компьютерынхоо зай багтаамж болон зай тэжээлийг хэмнэх -- цахилгаан энерги бага зарцуулах хөнгөн авсаархан программ сонго. Жишээлбэл: [Emacs](https://github.com/rnkn/olivetti){:target="_blank"}, [TeXstudio](texstudio.html), [Scrivener](https://en.wikipedia.org/wiki/Scrivener_(software)){:target="_blank"}, [Sublime Text](https://www.sublimetext.com/docs/distraction_free.html){:target="_blank"}, болон [Manuskript](http://www.theologeek.ch/manuskript/){:target="_blank"}. [Microsoft Word](https://en.wikipedia.org/wiki/Microsoft_Word){:target="_blank"} дээр ном бичих нь тохиромжгүй, номын хуудас нэмэгдэх тусам программын ажиллагаа удааширч санах ойг улам илүү шаарддаг. Энэ программ нь бичиг баримт боловсруулахад зориулагдсан гэдгийг санах хэрэгтэй. [Microsoft Publisher](https://en.wikipedia.org/wiki/Microsoft_Publisher){:target="_blank"}, [Adobe Indesign](https://en.wikipedia.org/wiki/Adobe_InDesign){:target="_blank"} программууд нь хэвлэлийн эх бэлтгэх бэлтгэхэд зориулагдсан бөгөөд ажиллахдаа санах ой нэлээд зарцуулдаг тул өдөр тутам ном бичихэд ашиглах нь тохиромжгүй, зөвхөн бэлэн болсон текстийг ном болгон засварлахад ашиглах нь зүйтэй.
- Аль болох [энгийн текст хэлбэрээр](https://en.wikipedia.org/wiki/Plain_text){:target="_blank"} номоо бэлтгэ, загвар дизайныг хожим шийд. Өөрөөр хэлбэл, [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG){:target="_blank"} төрлийн программ биш, [Text editor](https://en.wikipedia.org/wiki/Text_editor){:target="_blank"} сонго гэсэн үг. Улмаар, [LaTeX](https://www.learnlatex.org/en/){:target="_blank"}, болон [Org-mode](https://orgmode.org/quickstart.html), [Markdown](https://www.markdownguide.org/getting-started/){:target="_blank"} зэргийн аль нэгийг сур.
- Мэдээж, номоо алдаа мадаггүй бэлтгэхийн тулд алдаа шалгагч ашиглах хэрэгтэй.
