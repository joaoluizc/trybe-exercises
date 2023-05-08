import { books } from './books_object.mjs';

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const bookMatch = books.find((book) => book.author.birthYear === 1947);
  return bookMatch.author.name;
}

console.log(authorBornIn1947());