function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}
function unshelfBook(title, shelf) {
  var matchingBook = shelf.find((book) => book.title === title);
  var index = shelf.indexOf(matchingBook);
  shelf.splice(index, 1);

  // for (var i = 0; i < shelf.length; i++) {
  //   if (shelf[i].title === title) {
  //     shelf.splice(i, 1);
  //   }
  // }
}
function listTitles(shelf) {
  var sentence = shelf.reduce((acc, curr, i) => {
    if (i < shelf.length - 1) {
      return (acc += `${curr.title}, `);
    } else {
      return (acc += curr.title);
    }
  }, '');
  return sentence;

  // var sentence = ``;
  // shelf.forEach((book, i) =>
  //   i < shelf.length - 1
  //     ? (sentence += `${book.title}, `)
  //     : (sentence += book.title)
  // );
  // return sentence;

  // var sentence = ``;
  // for (var i = 0; i < shelf.length; i++) {
  //  if (i < shelf.length - 1) {
  //    sentence += `${shelf[i].title}, `;
  //    } else {
  //    sentence += shelf[i].title;
  //    }
  //  }
  // return sentence;
}
function searchShelf(shelf, title) {
  return shelf.includes(shelf.find((book) => book.title === title));

  //  var bookFound = [];
  //   for (var i = 0; i < shelf.length; i++) {
  //     if (shelf[i].title === title){
  //       bookFound.push(true);
  //     }
  //   }
  //   return bookFound.includes(true);
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
