function createTitle(title) {
  return `The ${title}`;
}
function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return mainCharacter;
}
function saveReview(review, reviewArr) {
  if (!reviewArr.includes(review)) {
    reviewArr.push(review);
  }
}
function calculatePageCount(title) {
  return title.length * 20;
}
function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
  return book;
}
function editBook(book) {
  book.pageCount *= 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
