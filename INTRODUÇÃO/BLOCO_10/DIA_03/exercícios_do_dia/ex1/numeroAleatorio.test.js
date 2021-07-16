//Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const random = require('./numeroAleatorio');

// test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () =>{
// random.randomNumber = jest.fn().mockReturnValue(10);

// expect(random.randomNumber()).toBe(10);
// expect(random.randomNumber).toHaveBeenCalled();
// expect(random.randomNumber).toHaveBeenCalledTimes(1)
// });

//========================================================================================

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.


// test('Recebe dois parametros e retorna divisão deles', () => {

//     random.randomNumber = jest.fn().mockImplementation((a, b) => a / b);


//     expect(random.randomNumber(10, 2)).toBe(5);
//     expect(random.randomNumber).toHaveBeenCalled();
//     expect(random.randomNumber).toHaveBeenCalledTimes(1);
//     expect(random.randomNumber).toHaveBeenCalledWith(10, 2);

// })

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('testando implementações', () =>{

    test('receba três parâmetros e retorne sua multiplicação.', () => {
        random.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

        // random.randonNumber(2, 2, 2);
        expect(random.randomNumber(2, 2, 2)).toBe(8);
        expect(random.randomNumber).toHaveBeenCalled();
        expect(random.randomNumber).toHaveBeenCalledTimes(1);
        expect(random.randomNumber).toHaveBeenCalledWith(2, 2, 2);
  });

    test('reseta o mock e implementa que receba um parâmetro e retorne seu dobro', () => {
        random.randomNumber = jest.fn().mockImplementation(a => a * 2);

        expect(random.randomNumber(10)).toBe(20)
        expect(random.randomNumber).toHaveBeenCalled();
        expect(random.randomNumber).toHaveBeenCalledTimes(1);
        expect(random.randomNumber).toHaveBeenLastCalledWith(10)
  })
        
});