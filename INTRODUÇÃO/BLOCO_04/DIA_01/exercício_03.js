/*Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/

let number1 = 20;
let number2 = 26;
let number3 = 11

if ((number1 > number2) && (number1 > number3)) {
    console.log("O número maior é o: " + number1);
}
else if
    ((number2 > number1) && (number2 > number3)){
    console.log("O número maior é o: " + number2);
}
else{
    console.log ("O número maior é o: " + number3);
}