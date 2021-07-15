const myRemoveWithoutCopy = require('./myRemoveWithoutCopy')

describe('Requisito 3', () => {
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
        const list = [1, 2, 3, 4];
        const returnList = myRemoveWithoutCopy(list, 3)
        expect(myRemoveWithoutCopy(list)).toEqual(returnList);
    })

    it ('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})