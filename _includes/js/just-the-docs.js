lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^[^\p{L}\p{N}]+/u, '').replace(/[^\p{L}\p{N}]+$/u, '');
  });
};
lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer');
this.pipeline.reset();
this.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer);
