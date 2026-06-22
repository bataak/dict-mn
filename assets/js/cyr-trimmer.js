(function () {
  function patch() {
    if (!window.lunr || lunr.__cyr) return !!window.lunr;
    lunr.trimmer = function (token) {
      return token.update(function (s) {
        return s.replace(/^[^\p{L}\p{N}_]+/u, '').replace(/[^\p{L}\p{N}_]+$/u, '');
      });
    };
    if (lunr.Pipeline.registeredFunctions) {
      delete lunr.Pipeline.registeredFunctions.trimmer;
    }
    lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer');
    lunr.__cyr = true;
    return true;
  }
  if (!patch()) {
    var n = 0, id = setInterval(function () {
      if (patch() || ++n > 200) clearInterval(id);
    }, 10);
  }
})();
