const {somaMultiplos} = require('./exercicio-inteiros')

describe('Exercicio Inteiros', () => {
    it('Validar somas dos múltiplos menores que 1000', () => {
        expect(somaMultiplos( 7, 5)).toBe(156361)
    });
});