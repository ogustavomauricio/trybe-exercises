const {obj1, obj2, obj3} = require('./obs');

describe('Requisito 5', () => {
    it('Compare dois objetos para verificar se são idênticos ou não', () => {
        expect(obj1).toEqual(obj2)
    })

    it('Compare dois objetos para verificar se são idênticos ou não', () => {
        expect(obj2).not.toEqual(obj3)
    });

    it('Compare dois objetos para verificar se são idênticos ou não', () => {
        expect(obj1).not.toEqual(obj3)
    })
    
})