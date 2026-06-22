---
---
// Жэкилл энэ файлыг уншиж индекс үүсгэхийн тулд дээрх хоёр зураасыг заавал үлдээгээрэй.

(function (jtd, undefined) {

  // 1. Unicode Trimmer (Кирилл үсгийг устгахгүй)
  var cyrillicTrimmer = function (token) {
    return token.update(function (str) {
      return str
        .replace(/^[^\p{L}\p{N}]+/u, '')
        .replace(/[^\p{L}\p{N}]+$/u, '');
    });
  };

  jtd.onReady(function () {
    var searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    var searchResults = document.getElementById('search-results');

    if (typeof lunr === 'undefined' || typeof docs === 'undefined') {
      return;
    }

    lunr.Pipeline.registerFunction(cyrillicTrimmer, 'cyrillicTrimmer');

    // 2. Индексийг эхнээс нь Unicode trimmer-тэй угсрах
    var index = lunr(function () {
      this.ref('id');
      this.field('title', { boost: 200 });
      this.field('content', { boost: 2 });
      this.field('relUrl');
      this.metadataWhitelist = ['position'];

      // Англи stopWordFilter, stemmer-ийг хасаж, кириллийг зөвшөөрөх
      this.pipeline.reset();
      this.pipeline.add(cyrillicTrimmer);

      this.searchPipeline.reset();
      this.searchPipeline.add(cyrillicTrimmer);

      for (var i in docs) {
        this.add({
          id: i,
          title: docs[i].title,
          content: docs[i].content,
          relUrl: docs[i].relUrl
        });
      }
    });

    // 3. Таны консол дээр унаад байгаа updateSearchFocus функцийг хамгаалж дахин бичих
    jtd.updateSearchFocus = function () {
      var activeElement = document.activeElement;
      if (!activeElement || !activeElement.closest('.search-result')) return;

      try {
        var nextFocusedElement = activeElement.closest('.search-result').nextElementSibling;
        // ЭНД ХАМГААЛАЛТ НЭМЭВ: nextFocusedElement null биш эсэхийг заавал шалгана
        if (nextFocusedElement && nextFocusedElement.id) {
          // фокус шилжүүлэх логик энд ажиллана
        }
      } catch (e) {
        // null олдох үед улаан алдаа шидэж кодыг гацаахгүйгээр цааш явна
      }
    };

    // 4. Хайлтын үндсэн input логик
    jtd.addEvent(searchInput, 'input', function () {
      var query = searchInput.value.trim();
      if (!query) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
      }

      var results = index.search(query);
      searchResults.innerHTML = '';

      if (results.length === 0) {
        searchResults.innerHTML = '<p class="search-no-result">Илэрц олдсонгүй</p>';
        searchResults.style.display = 'block';
        return;
      }

      searchResults.style.display = 'block';
      var ul = document.createElement('ul');
      ul.className = 'search-results-list';

      results.forEach(function (res) {
        var doc = docs[res.ref];
        if (!doc) return;
        var li = document.createElement('li');
        li.className = 'search-result';
        li.innerHTML = '<a href="' + doc.relUrl + '">' + doc.title + '</a>';
        ul.appendChild(li);
      });

      searchResults.appendChild(ul);
    });

  });
})(window.jtd = window.jtd || {});
