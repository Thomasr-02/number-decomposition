const validator = require('../utils/validator');

describe('Should validate incorrectly output', () => {
  it('When validator receive empty, should trow an error', () => {
    expect(() => validator('')).toThrowError('Entrada não pode ser vazia');
  });
  
  it('When validator receive not number, should trow an error', () => {
    expect(() => validator("string")).toThrowError('Entrada não é um número');
  });

  it('When validator receive negative number, should trow an error', () => {
    expect(() => validator("-3")).toThrowError('Entrada não pode ser negativa');
  })

});