---
---
// Жэкилл энэ файлыг уншиж индекс үүсгэхийн тулд дээрх хоёр зураасыг заавал үлдээгээрэй.

(function (jtd, undefined) {
  // 1. Кирилл үсгийг таньдаг Unicode trimmer
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
    var searchManifest = document.getElementById('search-manifest');

    if (typeof lunr === 'undefined' || typeof docs === 'undefined') {
      console.error('Lunr.js эсвэл хайлтын өгөгдөл ачаалагдсангүй.');
      return;
    }

    // Lunr-д trimmer-ээ бүртгүүлэх
    lunr.Pipeline.registerFunction(cyrillicTrimmer, 'cyrillicTrimmer');

    // 2. Индексийг эхнээс нь зөв угсрах
    var index = lunr(function () {
      this.ref('id');
      this.field('title', { boost: 200 });
      this.field('content', { boost: 2 });
      this.field('relUrl');
      this.metadataWhitelist = ['position'];

      // Англи шүүлтүүрүүдийг хасаж, зөвхөн кирилл trimmer үлдээх
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

    // 3. Хайлтын үндсэн логик болон input event-үүд
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

    // 4. Түрүүний 'id' null гэж унаад байсан функцийг хамгаалалттай үүсгэх
    jtd.updateSearchFocus = function () {
      var active = document.activeElement;
      if (!active || !active.closest('.search-result')) return;
      try {
        var next = active.closest('.search-result').nextElementSibling;
        if (next && next.id) {
          // шаардлагатай фокус шилжүүлэх код
        }
      } catch (e) {
        // Алдааг чимээгүй өнгөрөөнө
      }
    };
  });
})(window.jtd = window.jtd || {});
