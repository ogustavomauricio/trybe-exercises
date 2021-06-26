
const person = {
    name:"Gustavo",
    lastName: "Mauricio"
}

const formalGreeting = () => {    //crio uma saudação
   console.log('Olá como vai?')
}

person.greet = (param) => { // criando a entrada e passando como valor uma function.
    return param();
}

person.greet(formalGreeting); // chamo a entrada e passo como parametro a function de saudação; Essa por ser uma function ela precisa returnar e ser chamada. É o que acontece na linha 11

//=====================================================================
