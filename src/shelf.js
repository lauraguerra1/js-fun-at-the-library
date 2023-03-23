function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}
function unshelfBook(title, shelf) {
  var matchingBook = shelf.find((book) => book.title === title);
  var index = shelf.indexOf(matchingBook);
  shelf.splice(index, 1);
}
function listTitles(shelf) {
  var sentence = ``;
  shelf.forEach((book, i) =>
    i < shelf.length - 1
      ? (sentence += `${book.title}, `)
      : (sentence += book.title)
  );
  return sentence;
}
function searchShelf(shelf, title) {
  return shelf.includes(shelf.find((book) => book.title === title));
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
