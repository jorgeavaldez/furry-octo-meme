var Index = require('./Indexer/Indexer.js');

var bibIndex = new Index();

bibIndex.setFileName('./Assets/txt/bible.txt');
bibIndex.indexFile();
