import { books } from './books_object.mjs';

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear >= 1901);
}

console.log(everyoneWasBornOnSecXX());