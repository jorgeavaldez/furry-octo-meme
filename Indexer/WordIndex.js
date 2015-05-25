// This is a storage object for the index entries.
//
// It holds the word that we are indexing, as well as the line number
// and the line in which the word appears as well.
//
// For words that appear more than once, the lines and the line numbers are
// kept in parallel array.s

// Default WordIndex constructor.
//
// @param word - the word to be stored and indexed.
//    this is what we actually sort the index by when in AVL mode.
//
// @param lineNum - The line number that the word is on.
//
// @param line - This is the line that the word actually appears on.
//    Another way to put it is that this is the line at lineNum in the corpus.
function WordIndex(word, lineNum, line) {
  this.word = word;
  this.lineNums = [lineNum];
  this.lines = [line];
}

// Updates the WordIndex.
// This means we add a new line and line number.
WordIndex.prototype.update = function (lineNum, line) {
  this.lineNums.push(lineNum);
  this.lines.push(line);
};

// Returns a string representation of the WordIndex.
// This includes a list of each line number, and the lines found there.
WordIndex.prototype.toString = function () {
  var result = this.word + '\n';

  for (var i = 0; i < this.word.length; i++) {
    result.concat('=');
  }
  result.concat('\n');

  for (var i = 0; i < this.lineNums.length && i < this.lines.length; i++) {
    result.concat('Line Number: ' + this.lineNums[i] + '\n');
    result.concat('Line: ' + this.lines[i] + '\n');
  }

  return result;
};

module.exports = WordIndex;
