const {calculoMdc} = require('./exercicio-mdc')
var aMdc = 58, bMdc = 6, resultado;

describe('Exercicio MDC', () => {
    it('Validar calculo MDC entre dois números', () => {
        expect(calculoMdc( aMdc, bMdc, resultado)).toBe(resultado)
    });
    
});