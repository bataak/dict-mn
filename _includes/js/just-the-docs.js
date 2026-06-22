lunr.tokenizer.separator = /[\s\-/]+/

// 1. Unicode-aware trimmer (Кирилл үсгийг хасахгүй)
lunr.trimmer = function (token) {
  return token.update(function (str) {
    return str
      .replace(/^[^\p{L}\p{N}]+/u, '')
      .replace(/[^\p{L}\p{N}]+$/u, '');
  });
};

lunr.Pipeline.registerFunction(lunr.trimmer, 'unicodeTrimmer');

var index = lunr(function(){
  this.ref('id');
  this.field('title', { boost: 200 });
  this.field('content', { boost: 2 });
  this.field('relUrl');
  this.metadataWhitelist = ['position'];

  // 2. Үндсэн pipeline-ийг шинэчлэх (stopWordFilter болон stemmer-ийг хасав)
  this.pipeline.reset();
  this.pipeline.add(lunr.trimmer);

  // 3. Хайлтын query pipeline-ийг мөн адил шинэчлэх
  this.searchPipeline.reset();
  this.searchPipeline.add(lunr.trimmer);

  for (var i in docs) {
    this.add({
      id: i,
      title: docs[i].title,
      content: docs[i].content,
      relUrl: docs[i].relUrl
    });
  }
});
