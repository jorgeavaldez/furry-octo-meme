# Furry Octo Meme
Basic search engine for text files. Reimplementation of the semester project
for data structures in JavaScript using NodeJS.

Also threw in some basic data structure implementations for good measure.

## Progress Check List
- [x] AVL Tree
- [x] Text Parsing
- [ ] Text Processing
- [x] Insertion into AVL Tree.
- [ ] Indexing of text and position.
- [ ] Index persistance.
- [ ] Index compression.
- [ ] Readable index stream.

## Architecture
So I'll first parse through the text by line. I'll save each line number,
then split the line, clean each word, and then wrap the words in an object
that contains a list of the line numbers within the index. Each word will
be stored in the AVL Tree and will act as a key in a hash table of their
line numbers.

## Notes
- I decided to use the GitHub auto-generated repository name because I thought
it was hilarious.:stuck_out_tongue:
- Kept RAM usage to a minimum with an asynchronous stream for parsing.
