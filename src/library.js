function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}
function addBook(library, book) {
  library.shelves[book.genre].push(book);
}
function checkoutBook(library, title, shelf) {
  var correctShelf = library.shelves[shelf];
  var matchingBook = correctShelf.find((book) => book.title === title);
  var index = correctShelf.indexOf(matchingBook);
  if (matchingBook) {
    library.shelves[shelf].splice(index, 1);
    return `You have now checked out ${matchingBook.title} from the ${library.name}.`;
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  }

  // var correctShelf = library.shelves[shelf];
  // var matchingBook = null;
  // if (correctShelf.length) {
  //   for (var i = 0; i < correctShelf.length; i++) {
  //     if (correctShelf[i].title === title) {
  //       matchingBook = true
  //       correctShelf.splice(i, 1)
  //     }
  //     if(matchingBook) {
  //       return `You have now checked out ${title} from the ${library.name}.`;
  //     } else {
  //       return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  //     }
  //   }
  // } else {
  //   return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  // }
}
function takeStock(library, shelf) {
  var allShelves = Object.values(library.shelves);
  if (shelf) {
    return `There are a total of ${library.shelves[shelf].length} ${shelf} books at the ${library.name}.`;
  } else {
    var totalBooks = 0;
    allShelves.forEach((shelf) => (totalBooks += shelf.length));
    // for (var i = 0; i < allShelves.length; i++) {
    //     totalBooks += allShelves[i].length;
    //   }
    return `There are a total of ${totalBooks} books at the ${library.name}.`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
