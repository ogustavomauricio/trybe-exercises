// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }


// assert.strictEqual(typeof sum,'function');
// // assert.strictEqual(sum (4,5),9);
// // assert.strictEqual(sum (0,0),0);
// assert.throws(() =>{
//     sum(4,'5');
// });
// assert.throws(() =>{
//     sum(4,'5');
// }, /^Error: parameters must be numbers$/);

//================================================================================

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// assert.deepStrictEqual(myRemove([1, 2, 3, 4],3), [ 1, 2, 4 ], "Array diferente do esperado");
// assert.notDeepEqual(myRemove([1, 2, 3, 4],3), [1, 2, 3, 4], "Erro: Retornando array indevido")

// assert.StrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4],"Array sofreu alteração");

// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4],"return inválido" );

//========================================================================================

// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// assert.strictEqual(typeof myRemoveWithoutCopy, "function");
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4],"Return Inválido");
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4],"Return Inválido");
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,3,4],"Error: return inválido");
// assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4],"Error: return inválido");

//=======================================================================================

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // implemente seus testes aqui
// assert.strictEqual(typeof myFizzBuzz, "function");
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(21), 'fizz');
// assert.strictEqual(myFizzBuzz(25), 'buzz');
// assert.strictEqual(myFizzBuzz(8), 8);
// assert.strictEqual(myFizzBuzz("Isso não é um número"), false);

//========================================================================================

// Compare dois objetos para verificar se são idênticos ou não

// const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// // implemente seus testes aqui

// assert.notStrictEqual(obj1,obj2,"Objetos diferentes");
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);

// =======================================================================================



// const assert = require('assert');
// // escreva a função addOne aqui
// const addOne = (myarray) => {
//  const output= [];
//  for (let index = 0; index < myarray.length; index +=1){
//      output.push(myarray[index] + 1)
//  }
//  return output
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);


//=======================================================================================

//Escreva a função wordLengths para passar nos testes já implementados.

// const assert = require('assert');
// // escreva a função wordLengths aqui
// const wordLengths = (array) =>{
// const output = [];
// for (let index = 0; index < array.length; index +=1){
//     output.push(array[index].length);
//   }
//   return output;
// }
 
// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// =======================================================================================

// const assert = require('assert');
// // escreva a função sumAllNumbers aqui
// const sumAllNumbers = (array) => {
//     let output = 0;
//     for (let index = 0; index < array.length; index +=1){
//         output += (array[index]);

//     }
//     return output;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

//======================================================================================
// Escreva a função findTheNeedle para passar nos testes já implementados.

// const assert = require('assert');
// // escreva a função findTheNeedle aqui

// const findTheNeedle = (array,word) => {
//     let output = -1;
//     for (const index in array) {
//         if(word === array[index]){
//             output = Number(index);
//         }
//     }
//     return output;
// }

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// Reescrevendo funções utilizando TDD - Parte 3

// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

// const assert = require('assert');

// const greetPeople = (people) => {
//     let greeting = 'Hello ';
   
  
//     for (const person in people) {
//      const result = (`${greeting} ${people[person]}`)
       
//     }
//     // console.log(result)
//     return result;

//   };
  
//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
//   const output = greetPeople(parameter);

//   assert.strictEqual(output,result);

// =======================================================================================
// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
// const assert = require('assert');

// const removeVowels = (word) => {
//     const characters = word.split('');
//     const results = [];
//     let counter = 0;

//     for (let index = 0; index < characters.length; index += 1) {
//       if (
//         characters[index] === 'a' ||
//         characters[index] === 'o' ||
//         characters[index] === 'i' ||
//         characters[index] === 'e' ||
//         characters[index] === 'u'
//       ) {
//         counter += 1;
//         results.push(counter);
        
//       } else {
//         results.push(characters[index]);
//       }
//     }
//    return results.join(''); 
//   };
  
  
//   const parameter = 'Dayane';
//   const result = 'D1y2n3';
//   const output = removeVowels(parameter);

//   assert.strictEqual(output,result);

//======================================================================================

// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const greaterThanTen = (array) => {
    const results = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 10) {
         results.push(array[index]);
      }
      
    }
    return results;
  };
  
  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];
  const output = greaterThanTen(parameter);

  assert.deepStrictEqual(output,result);