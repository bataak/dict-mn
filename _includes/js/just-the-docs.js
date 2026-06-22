lunr.tokenizer.separator = /[\s\-/]+/

// Unicode-aware trimmer
lunr.trimmer = function (token) {
  return token.update(function (str) {
    return str
      .replace(/^[^\p{L}\p{N}]+/u, '')
      .replace(/[^\p{L}\p{N}]+$/u, '');
  });
};

lunr.Pipeline.registerFunction(
  lunr.trimmer,
  'unicodeTrimmer'
);

var index = lunr(function(){

  this.ref('id');
  this.field('title', { boost: 200 });
  this.field('content', { boost: 2 });
  this.field('relUrl');
  this.metadataWhitelist = ['position'];

  // default pipeline-г солих
  this.pipeline.reset();
  this.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  );

  // search query pipeline-г мөн солих
  this.searchPipeline.reset();
  this.searchPipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  );

  for (var i in docs) {
    this.add({
      id: i,
      title: docs[i].title,
      content: docs[i].content,
      relUrl: docs[i].relUrl
    });
  }
});
