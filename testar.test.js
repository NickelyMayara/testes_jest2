const ConverteBitcoin = require('./index');

describe('Suite de testes para front end', () => {
    // eslint-disable-next-line no-unused-expressions
    test('Verifica o funcionamento da função', () => {
    expect(ConverteBitcoin(50)).toBe(15000000)
    });
});