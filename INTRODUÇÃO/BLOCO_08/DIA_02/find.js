//FIND 
//IMUTABILIDADE = ELE NÃO ALTERA O ELEMENTO QUE ORIGINAL.

// RECEBE COMO PARÂMETROS (ELEMENT, INDEX , ARRAY).

// SE ELE NÃO ENCONTRAR O QUE FOI PEDIDO ELE RETORNA UNDEFINED.

//  const passengers = [
//     { name: "Ademar", birthYear: 1975 },
//     { name: "Tiago", birthYear: 1997 },
//     { name: "Eduarda", birthYear: 2004 },
//     { name: "Jessica", birthYear: 1984 },
//     { name: "Enzo", birthYear: 2015 },
//     { name: "Natan", birthYear: 2001 },
//     { name: "Ana", birthYear: 1995 }
// ];
//   // encontre o passageiro de nome Enzo;

//   const enzo = passengers.find(passengers => passengers.name ==='Enzo');

//   console.log(enzo)

  // TRYBE EXERCÍSES 

  //1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

//   const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//     return numbers.find((number) => number % 3 === 0 && number % 5 ===0)
// }

// console.log(findDivisibleBy3And5())

// 2 - refatorando

// const findDivisibleBy3And5 = numbers.find(number => number % 3 === 0 && number % 5 ===0)
    
    
//     console.log(findDivisibleBy3And5)


    
//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
// return names.find((name) => name.length === 5);
// }

// console.log(findNameWithFiveLetters());


// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

// const musicas = [
//     { id: '31031686', title: 'Partita in C moll BWV 997' },
//     { id: '31031685', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find((id) => id.id ==='31031685')
//   }
  
//   console.log(findMusic('31031685'))

