const validator = (input) => {
  if (!input.length) throw new Error('Entrada não pode ser vazia');
  if (isNaN(input)) throw new Error('Entrada não é um número');
  if (input <= 0) throw new Error('Entrada não pode ser negativa');
  if (!Number.isInteger(input)) throw new Error('Entrada não é um número inteiro');
  
  return parseInt(input);
}

module.exports = validator;