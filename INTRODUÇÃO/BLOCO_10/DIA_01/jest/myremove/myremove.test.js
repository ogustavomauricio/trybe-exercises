const myRemove = require('./myremove');

describe('Requisito 2' , () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4],3)).toEqual([1, 2, 4]); // toEqual lista e objecto.
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () =>{
        expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]) // ou not.toEqual Funciona
    });

    it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
        const newList = [1,2,3,4];
        const returnList = myRemove(newList,3);
        expect(newList).not.toEqual(returnList);
        // expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4],5)).toEqual([1, 2, 3, 4]);
    });
})