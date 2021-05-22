/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/

let anguloA = 60
let anguloB = 60
let anguloC = 60

if(anguloA + anguloB + anguloC == 180){
    console.log("True")
}
else if ((anguloA < 0) || (anguloB < 0) || (anguloC < 0)){
    console.log("Angulo com valor negativo. Favor verificar")
}

else if (anguloA + anguloB + anguloC != 180){
    console.log("False")
}