# dict-mn

Энэхүү монгол толь нь [Hunspell](http://hunspell.github.io) үгийн алдаа шалгагчид тулгуурлан ажиллах бөгөөд 60 мянга орчим үндэс, тэдгээрийн 2 тэрбум гаруй хувилал бүхий үгийн санг агуулсан.

Толины онцлогийг дурдвал:

-   Академич Ц. Дамдинсүрэн нарын "Монгол үсгийн дүрмийн толь" бүтээлийг баримтлан бүтээсэн
-   Нөхцөлийн угсруулан холбох зарчимд тулгуурласан (Hunspell v1.3.3-аас хойших хувилбарт ажиллана)
-   Алдаатай үгийн зөв хувилбарыг оновчтой тодорхойлно
-   Morphological analysis
-   Stemming

# Hunspell ашиглах

Хэрэв таны ашиглаж буй программ Hunspell дэмждэггүй эсвэл та их хэмжээний өгөгдлийн бүх алдаатай үгсийг давхцалгүйгээр жагсаалт болгон харахыг хүсвэл Hunspell программыг дараах байдлаар ашиглахыг зөвлөж байна.

Юун түрүүнд [Hunspell](https://github.com/hunspell/hunspell) алдаа шалгагчаа суулгасан байх хэрэгтэй. Хэрхэн суулгах мэдээллийг [https://github.com/hunspell/hunspell](https://github.com/hunspell/hunspell) хаягаас мөн авах боломжтой.

## Hunspell суулгах

Linux үйлдлийн систем дээр суулгах бол

```
sudo apt install hunspell
```

Mac үйлдлийн систем дээр суулгах бол

```
brew install hunspell
```

Windows үйлдлийн систем дээр суулгах бол [Chocolatey](https://chocolatey.org) ашиглаж болно

```
choco install hunspell.portable
```

Ийнхүү суулгасан бол толь (`mn_MN.aff`, `mn_MN.dic`) байрлаж буй замыг дараах байдлаар оруулж өгнө

```
hunspell -d <your-location>/mn_MN,en_US -l input.txt | sort | uniq > output.txt
```

Дээрх жишээнд монгол, англи толиудыг зэрэг ашигласан байна. Ихэнх программуудад олон толийг нэгэн зэрэг ашиглах боломжгүй байдаг бөгөөд энэ тохиолдолд толиудаа нэгтгэх хэрэгтэй болдог. Үүний тулд [hunspell-merge](https://github.com/arty-name/hunspell-merge) ашиглахыг зөвлөж байна.

# Python хэл дээр hunspell ашиглах

Linux үйлдлийн системийн хувьд [pyhunspell](https://github.com/pyhunspell/pyhunspell) ашиглахын тулд дараах сангуудыг суулгасан байх хэрэгтэй:

```
sudo apt install libhunspell-dev
```

Хэрэв python3.11 дээр ашиглах бол:

```
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11 python3.11-dev
```

Ийнхүү дараах командаар суулгана:

```
pip install hunspell
```

эсвэл

```
pip install spylls
```

## JavaScript болон Node.js дээр ашиглах

Hunspell программын үндсэн функцүүдийг агуулсан plain-vanilla JavaScript дээр ажиллах [nspell](https://github.com/wooorm/nspell) алдаа шалгагчийг ашиглах бол

```
npm install nspell
```

Node.js дээр ажиллах [Nodehun](https://github.com/Wulf/nodehun) алдаа шалгагчийг ашиглах бол

```
npm install nodehun
```

улмаар монгол үгийн алдаа шалгах толийг [wooorm/dictionaries](https://github.com/wooorm/dictionaries) санг ашиглан

```
npm install dictionary-mn
```

командуудаар тус тус суулгана.

Монгол үгийн алдаа шалгах толины талаарх дэлгэрэнгүй мэдээлэл болон өөр бусад программд хэрхэн ашиглах зааврыг [зөв бичигдэв](https://zuv.bichig.dev/) веб сайтаас үзнэ үү.

# Credits

[LibreOffice / dictionaries](https://github.com/LibreOffice/dictionaries), [wooorm / dictionaries](https://github.com/wooorm/dictionaries), [ONLYOFFICE / dictionaries](https://github.com/ONLYOFFICE/dictionaries), [Spylls: Hunspell ported to Python](https://github.com/zverok/spylls)


## Contributors

<a href="https://github.com/bataak/dict-mn/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bataak/dict-mn&r="  width="200px"/>
</a>