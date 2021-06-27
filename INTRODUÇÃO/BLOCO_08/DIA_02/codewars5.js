// Você receberá uma matriz de objetos (matrizes associativas em PHP) que representam dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de programação que você está organizando.

// Sua tarefa é retornar um objeto (array associativo em PHP) que inclui a contagem de cada linguagem de codificação representada no meetup .

// Por exemplo, dada a seguinte matriz de entrada:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
// sua função deve retornar o seguinte objeto (matriz associativa em PHP):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notas:

// A ordem dos idiomas no objeto não importa.
// O valor da contagem deve ser um número válido.
// A matriz de entrada sempre será válida e formatada como no exemplo acima.

// function countLanguages(list) {
//    let counter = 0;
//    let counter2 = 0;
//    let counter3 = 0;

//    for(let index = 0; index < list.length; index +=1) {
//      if(list[index].language === 'C'){
//        counter += 1;
//      }
//    }

//    for(let index = 0; index < list.length; index +=1) {
//     if(list[index].language === 'JavaScript'){
//       counter2+= 1;
//     }
//   }

//   for(let index = 0; index < list.length; index +=1) {
//     if(list[index].language === 'Ruby'){
//       counter3 += 1;
//     }
//   }
//   return `C: ${counter}, JavaScript: ${counter2}, Ruby: ${counter3}`
//   }
// countLanguages(list1)
//   console.log(countLanguages) 

function countLanguages(list){
  count= {};
  list.forEach(element => count[element.language] = (count[element.language]|| 0) + 1);
  return count
}