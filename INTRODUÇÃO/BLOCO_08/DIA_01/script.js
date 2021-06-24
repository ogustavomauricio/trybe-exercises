// const person = (nome) => ({ nome:nome, eMail:`${nome.split(' ').join('')}@trybe.com`});





// const newEmployees = () => {
//     const employees = {
//       id1: person('PedroGuerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: person('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: person('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };
//   console.log(newEmployees());

//=======================================================================================
// const checkNumber = (number, result) => {
//     if (number === result) {
//         return 'Parabens, você ganhou!'
//     }
//     return 'Tente Novamente'
// }

// const drawResult = (number, checknumber) => {
// const result = Math.round(Math.random() * (5));
// return result;
// };

// console.log(drawResult(3,checknumber))

//=====================================================================

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));
 

