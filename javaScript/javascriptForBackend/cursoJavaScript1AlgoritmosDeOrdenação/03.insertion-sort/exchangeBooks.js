const books = require('../00.genericFunction/bookList');

function exchangeBooks (current) {
  let bookCurrent  = books[current];
  let lowestPriceBook = books[current -1];

  books[current] = lowestPriceBook;
  books[current - 1] = bookCurrent;
}

module.exports = exchangeBooks;