const books = require('../00.genericFunction/bookList');

//const bookPrice = [13, 15, 30, 50, 45, 20];

function lowestValue(current) {
  let cheap = current;
  for (let current = cheap; current < books.length; current++) {
    if (books[current].price < books[cheap].price) {
      cheap = current;
    }
  }

  return cheap;
}

module.exports = lowestValue;