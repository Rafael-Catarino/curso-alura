const books = require('../00.genericFunction/bookList');
const lowestValue = require('../01.pensando-em-algoritmos/lowestValue');

books.forEach((book, index) => {
  let lower = lowestValue(index);

  let bookCurrent  = books[index];
  let lowestPriceBook = books[lower];

  books[index] = lowestPriceBook;
  books[lower] = bookCurrent;
});

console.log(books);

// Outra forma de executar o mesmo código.

/* for (let current = 0; current < books.length; current++) {
  let lower = lowestValue(books, current);

  let bookCurrent  = books[current];
  let lowestPriceBook = books[lower];

  books[current] = lowestPriceBook;
  books[lower] = bookCurrent;
} */