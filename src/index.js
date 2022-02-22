const { isPrime, getNumberDivisors, validator } = require("./utils");
const readline = require("readline-sync");

const execute = () => {
  try {
    const input = readline.question("Digite um número inteiro: ");
    console.log(`Número de Entrada ${input}`);
    
    const validatedInput = validator(input);

    const dividers = getNumberDivisors(validatedInput);
    const primeNumbersFromDividers = dividers.filter(isPrime);
    console.log(`Números divisores: ${dividers}`);
    console.log(`Divisores primos: ${primeNumbersFromDividers}`);
  } catch (error) {
    console.log(error.message);
  }
}


execute();
