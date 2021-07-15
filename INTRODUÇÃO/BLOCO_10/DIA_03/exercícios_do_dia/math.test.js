const math = require('./math');

// Faça o mock da funcão subtrair e teste sua chamada.

// test('testar chamada da função subtrair', () => {
//     math.subtrair = jest.fn();

//     math.subtrair();
//     expect(math.subtrair).toHaveBeenCalled();
// });

//========================================================================================

//Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test('Testar chamada e retorno da função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toBe(10);
})

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('testar chamada, retorno e parametrôs da função somar', () => {

    const mockSomar = jest.spyOn(math, 'somar');


    mockSomar(1,2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledWith(1, 2)
    expect(mockSomar(1, 2)).resolves.toBe(3)
})