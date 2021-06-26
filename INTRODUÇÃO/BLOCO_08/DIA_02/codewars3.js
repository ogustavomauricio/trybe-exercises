// Você receberá uma matriz de objetos (matrizes associativas em PHP) que representam dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de programação que você está organizando.

// Sua tarefa é retornar:

// true se pelo menos um desenvolvedor Ruby se inscreveu; ou
// false se não houver desenvolvedores Ruby.
// Por exemplo, dada a seguinte matriz de entrada:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
// sua função deve retornar true.

// Notas:

// A matriz de entrada sempre será válida e formatada como no exemplo acima.

const language = list1.some((participante) =>{
    return participante.language === 'Ruby'
});

console.log(language)
