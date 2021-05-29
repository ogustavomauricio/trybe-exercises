//Exercício 01 - Bloco 4.2
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Indice:" , numbers[0]);
console.log("Indice:" , numbers[1]);
console.log("Indice:" , numbers[2]);
console.log("Indice:" , numbers[3]);
console.log("Indice:" , numbers[4]);
console.log("Indice:" , numbers[5]);
console.log("Indice:" , numbers[6]);
console.log("Indice:" , numbers[7]);
console.log("Indice:" , numbers[8]);
console.log("Indice:" , numbers[9]);

console.log(numbers)

// //Exercício 02 - Bloco 4.2
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for(let index = 0; index < numbers.length; index += 1){
    result += numbers[index]
}
console.log(result)





//Exercício 03 - Bloco 4.2

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let media;

for(let index =0; index < numbers.length; index += 1){
    result += numbers[index]; // Isso é igual à: result = result + numbers[index]
    media = result / numbers.length;
};
console.log(media)


//Exercício 04 - Bloco 4.2
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let media;

for( let index =0; index < numbers.length; index += 1){
    result += numbers[index];
    media = result / numbers.length;
};
    if(media > 20 ){
        console.log("Valor maior que 20");
    } else{
        console.log("Valor menor que 20")
    };


//Exercício 05 - Bloco 4.2
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = numbers[0]  ;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < numeroMaior){
        numeroMaior = numbers[index]
    }
}
console.log(numeroMaior)



////Exercício 06 - Bloco 4.2
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
    if( numbers[index] % 2 !== 0){
        valorImpar ++;
    }
}
if(valorImpar === 0){
    console.log("nenhum valor impar encontrado")
}else{
    console.log(valorImpar)
}

//Exercício 07 - Bloco 4.2
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for(index =0; index < numbers.length; index += 1){
    if (numbers[index] < menorNumero){
        menorNumero = numbers[index];
    }
}
console.log(menorNumero)


//Exercício 08 - Bloco 4.2
// /Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];

for(let index = 1; index <= 25; index += 1){
    array.push (index)
}
console.log(array )

//Exercício 09 - Bloco 4.2
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let array = [];
let divisao =[];
for(let index = 0; index <=25;index +=1){
    array.push(index)
}

for(let index2 = 0; index2 < array.length; index2 += 1){
    divisao.push(array[index2] / 2);
}
console.log(divisao)


//Exercícios - Bônus
// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position ;
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log (numbers)

//Exercícios - Bônus

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray =[];

for(let index = 0; index < numbers.length; index +=1){
    if(index + 1 < numbers.length){
        newArray.push(numbers[index] * numbers[index +1]);
    } else {
        newArray.push(numbers[index] * 2)
    }
}
console.log(newArray)














