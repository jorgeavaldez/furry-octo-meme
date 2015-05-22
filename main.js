var Index = require('./Indexer.js');

var bibIndex = new Index();

bibIndex.setFileName('./Assets/bible.txt');
bibIndex.indexFile();
