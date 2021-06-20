const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
 
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

                            // Add novo turno na lesson2

//   const turnTwo = (parametro) => lesson2.turno = "Manhã"
//   turnTwo(lesson2);
//    console.log(lesson2);

                           //Listar as keys de um objeto

//    const listKeys = (paramentro) => {
//        const arrayKeys = Object.keys(paramentro);
//        for (index in arrayKeys){
//             console.log(arrayKeys[index]);
//        }      
//    };

//    console.log("Lesson 1");
//    listKeys(lesson1);
//    console.log(" ");
//    console.log("Lesson 2");
//    listKeys(lesson2);
//    console.log(" ");
//    console.log("Lesson 3");
//    listKeys(lesson3);

                          // Mostrar o Tamanho de um Objecto

// const tamanho = (parametro) =>{
//     const tamanhoLengh = Object.keys(parametro).length
//     console.log (tamanhoLengh);
// }

// tamanho(lesson1);
// tamanho(lesson2);
// tamanho(lesson3);

 //  - Função para listar os Valores de um Objecto


//Com For o log é apresentado linha por linha.

// const valor = (parametro) => {
//     const valorObjeto = Object.values(parametro);
//     for (index in valorObjeto) {
//         console.log(valorObjeto[index])
//     }
//   };
// valor(lesson1);
// valor(lesson2);
// valor(lesson3);

//Sem For, o log é apresentado em uma linha como array.
// const valor2 = (parametro) => {
//     const valorObjecto = Object.values(parametro);
//     console.log(valorObjecto);
// }
// valor2(lesson1);
// valor2(lesson2);
// valor2(lesson3);


// 5 -Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign 

// const arrayVazio = {};    
// const allLessons = Object.assign(arrayVazio,{lesson1,lesson2,lesson3});
// console.log(allLessons);


//6 - function que retorna o Nº Total de Estudando em todas as Aulas.

// const numberTotal = (parametro) => {
//     const google = (`O total de estudantes em todas as aulas é: ${lesson1.numeroEstudantes+lesson2.numeroEstudantes +lesson3.numeroEstudantes}`)
//     console.log(google);
// }
// numberTotal(lesson1);

//7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

// const keyValue = (objecto, number) => Object.values(objecto)[number];
// console.log(keyValue(lesson2,2));


//8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

// const verifica = (objecto, key, value) => {
//     const array =Object.entries(objecto);
//     let isEqual = false;
//     for (let index in array) {
//         if (array[index][0] === key && array[index][1] === value) isEqual = true;
//   }
// 	return isEqual;	
// }
// console.log(verifica(objecto,key,value));

//Bônus - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

// const assistiuAula = (parametro) => {	
// 	const soma = 0;
// 	const array = Object.keys(parametro)
// 	for (index in array) {
// 		if (parametro[array[index]].materia === 'Matemática'){
// 			soma += parametro[array[index]].numeroEstudantes;
// 		}
// 	}
// 	return total;
// }
// console.log(assistiuAula(allLessons));

// const getNumberOfStudentsMath = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     if(obj[array[index]].materia === 'Matemática'){
//     total += obj[array[index]].numeroEstudantes;
//     }
//   }
//   return total;
// }
// console.log(getNumberOfStudentsMath(allLessons));

//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Carlos'));