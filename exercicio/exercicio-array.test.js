const {indiceMaior, indiceMenor, valorMaior, valorMenor} = require('./exercicio-array.js')
var numeros = [79, 23, 3, 18, 16, 66, 97, 48, 19, 44];

describe('Exercicio Array', () => {
    it('Validar indice maior', () => {
        expect(indiceMaior([1,2,3,4,5])).toBe(4);
    })

    it('Validar indice menor', () => {
        expect(indiceMenor([14,35,17,8,99,47])).toBe(3)
    });

    it('Validar maior número', () => {
        expect(valorMaior(numeros)).toBe(97)
        
    });

    it('Validar menor número', () => {
        expect(valorMenor(numeros)).toBe(3)
    });
});