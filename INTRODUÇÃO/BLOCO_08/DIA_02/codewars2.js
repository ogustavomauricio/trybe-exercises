//Você receberá uma matriz de objetos (matrizes associativas em PHP) que representam dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de programação que você está organizando.

//Sua tarefa é retornar uma matriz em que cada objeto terá uma nova propriedade 'saudação' com o seguinte valor de string:

//Olá, <firstName here>, do que você mais gosta em <language here>?

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

// list1.forEach((participante)=>{
//  return participante.greating = `Olá, ${participante.firstName}, do que você mais gosta em ${participante.language}?`
// })

// console.log(list1);

//REFATORANDO

list1.forEach(participante => participante.greating = `Olá, ${participante.firstName}, do que você mais gosta em ${participante.language}?`)
 
 console.log(list1);

 //resposta esperada
 [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];