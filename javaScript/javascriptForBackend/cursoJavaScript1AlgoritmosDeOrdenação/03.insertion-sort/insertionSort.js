const books = require('../00.genericFunction/bookList');
const exchangeBooks = require('../00.genericFunction/exchangeBooks');

function insertionSort(arr) {

  for(let current = 0; current < arr.length; current++) {
    let positionBook = current;
    while(positionBook > 0 && arr[positionBook].price < arr[positionBook - 1].price) {
      exchangeBooks(positionBook);
      positionBook--;
    }
  }

  console.log(books);
}

insertionSort(books);