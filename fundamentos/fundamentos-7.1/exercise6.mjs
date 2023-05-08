import { books } from './books_object.mjs';

const expectedResult = false;

const authorUnique = () => {
  let unique = true;
  books.forEach((book1) => {
    books.forEach((book2) => {
      if (book1 === book2) {
        return
      }
      if (book1.author.birthYear === book2.author.birthYear) unique = false;
    })
  })
  return unique;
}

console.log(authorUnique());
