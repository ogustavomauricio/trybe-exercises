// Você receberá uma matriz de objetos (matrizes associativas em PHP) que representam dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de programação que você está organizando. A lista é ordenada de acordo com quem se inscreveu primeiro.

// Sua tarefa é retornar uma das seguintes strings:

// < firstName here >, < country here > do primeiro desenvolvedor Python que se inscreveu; ou
// There will be no Python developers se nenhum desenvolvedor Python se inscreveu.
// Por exemplo, dada a seguinte matriz de entrada:

const list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
// sua função deve retornar Victoria, Puerto Rico.

// Notas:

// A matriz de entrada sempre será válida e formatada como no exemplo acima.


function getFirstPython(list) {
    var i = list.findIndex(x => x.language === "Python");
    return (i >= 0) ? list[i].firstName + ", " + list[i].country : "There will be no Python developers";
    }


getFirstPython(list1)

