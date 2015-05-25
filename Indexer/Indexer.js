var AVLTree = require('../AVL/AVLTree.js');
var WordIndex = require('WordIndex.js');
var fs = require('fs');

function Index() {
  // We're switching the index structure to a hash map.
  // Basically just an array, but whatever.
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

  this.inStream.on('readable', this._streamReadableCallback(firstRun));

  //console.log('Index length: ', index.numElements);

  this.inStream.on('end', this._streamEndCallback());

};

Index.prototype._streamReadableCallback = function (firstRun) {
  return (function() {
    if (firstRun) {
      console.log('Indexing started...\n');
      console.time('Total Index Time');
      firstRun = false;
    }

    var buffer;
    var wordBuff = '';

    var line = '';
    var lineNum = 1;

    // At this point we should begin keeping track of the line number that
    // we are at.
    // Probably store it in a struct of some sort.
    while(buffer = this.inStream.read(1)) {

      // Finding a space. We just reset wordBuff and append to the line.
      if (buffer.toString() === ' ') {
        line.concat(wordBuff + ' ');

      }

      else if (buffer.toString() === '\n') {

      }

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

Index.prototype._streamEndCallback = function () {
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
