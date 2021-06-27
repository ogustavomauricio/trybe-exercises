// Você receberá uma matriz de objetos (matrizes associativas em PHP) que representam dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de programação que você está organizando.

// Sua tarefa é retornar:

// true se todos os desenvolvedores da lista codificarem no mesmo idioma; ou
// false por outro lado.
// Por exemplo, dada a seguinte matriz de entrada:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
// sua função deve retornar true.

// Notas:

// As strings que representam um determinado idioma serão sempre formatadas da mesma forma (por exemplo, 'JavaScript' será sempre formatado com maiúsculas 'J' e 'S'
// A matriz de entrada sempre será válida e formatada como no exemplo acima.

function isSameLanguage(list) {
  return list.every((dev) => dev.language === 'JavaScript')
  }
  console.log(isSameLanguage(list1))