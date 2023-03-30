////////
//// Lidando com arrays
////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// item 1
// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])
// }

// item 2
// Some todos os valores contidos no array e imprima o resultado.
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i];
// }
// console.log(sum);

// item 3
// Calcule e imprima a média aritmética dos valores contidos no array.
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i];
// }
// let average = sum / numbers.length;
// console.log(average);

// item 4
// Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i];
// }
// let average = sum / numbers.length;
// if (average > 20) {
//   console.log("Valor maior que 20.")
// } else {
//   console.log("Valor menor ou igual a 20.")
// }

// item 5
// Utilizando for, descubra o maior valor contido no array e imprima-o.
// let biggestN = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > biggestN) {
//     biggestN = numbers[i];
//   }
// }
// console.log(biggestN);

// item 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
// let nOddNumbers = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   if ((numbers[i] % 2) !== 0) {
//     nOddNumbers += 1;
//   }
// }
// if (nOddNumbers === 0) {
//   console.log("Nenhum valor ímpar encontrado");
// } else {
//   console.log(`Existem ${nOddNumbers} valores ímpares!`);
// }

// item 7
// Utilizando for, descubra o menor valor contido no array e imprima-o.
// let smallestN = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < smallestN) {
//     smallestN = numbers[i];
//   }
// }
// console.log(smallestN);

// item 8
// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
// let array = [];
// for (let i = 0; i < 25; i += 1) {
//   array.push(i + 1);
// }
// console.log(array);

// item 9
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
// let array = [];
// let arrayDB2 = [];
// for (let i = 0; i < 25; i += 1) {
//   array.push(i + 1);
//   arrayDB2.push((i + 1) / 2);
// }
// console.log(arrayDB2);

////////
//// Lógica de programação e algoritmos
////////

// item 1
// crie um algoritmo que imprima na tela o fatorial de 10.
// let factorial = 10;
// for (let i = factorial; i > 1; i = i - 1) {
//   factorial *= (i - 1);
// }
// console.log(factorial);

// item 2
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. 
// let word = 'banana';
// let oppWord = '';
// let oppCounter = 0;
// for (let i = word.length; i > 0; i -= 1) {
//   oppWord += word[i - 1]
//   oppCounter += 1;
// }
// console.log(oppWord);

// item 3
let arrayPalavras = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
// function biggestWord(array) {
//   let biggestWordStr = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (biggestWordStr.length < array[i].length) {
//       biggestWordStr = array[i];
//     }
//   }
//   return `A maior palavra é '${biggestWordStr}', com ${biggestWordStr.length} caracteres.`;
// }

// function smallestWord(array) {
//   let smallestWordStr = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (smallestWordStr.length > array[i].length) {
//       smallestWordStr = array[i];
//     }
//   }
//   return `A menor palavra é '${smallestWordStr}', com ${smallestWordStr.length} caracteres.`;
// }

// console.log(biggestWord(arrayPalavras));
// console.log(smallestWord(arrayPalavras));