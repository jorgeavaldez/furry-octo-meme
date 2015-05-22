var AVLTree = require('../AVL/AVLTree.js');
var fs = require('fs');

function Index() {
  this.index = new AVLTree();
  this.inStream = null;
}

Index.prototype.setFileName = function (filename) {
  this.inStream = fs.createReadStream(filename);
};

Index.prototype.indexFile = function (filename) {
  if (!this.inStream && !filename) {
    console.log('No file specified :(');
    return;
  }

  else if (!this.inStream && filename) {
    this.setFileName(filename);
  }

  var firstRun = true;

  this.inStream.on('readable', this._thisReadable(firstRun));

  //console.log('Index length: ', index.numElements);

  this.inStream.on('end', this._thisEnd());

};

Index.prototype._thisReadable = function (firstRun) {
  return (function() {
    if (firstRun) {
      console.log('Indexing started...\n');
      console.time('Total Index Time');
      firstRun = false;
    }

    var buffer;
    var wordBuff = '';

    while(buffer = this.inStream.read(1)) {
      if (buffer.toString() !== ' ' && buffer.toString() !== '\n') {
        wordBuff += buffer.toString();
      }

      else {
        this.index.insert(wordBuff);
        wordBuff = '';
      }
    }
  }).bind(this);
};

Index.prototype._thisEnd = function () {
  return (function() {
      console.log('Indexing complete.');
      console.log('Index size: ', this.index.numElements);
      console.timeEnd('Total Index Time');
    }).bind(this);
};

Index.prototype.dumpIndex = function () {
  return this.index.flatten();
};

module.exports = Index;
