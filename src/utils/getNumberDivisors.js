// O(n*sqrt(n)) Time | O(n) Space
const getNumberDivisors = (num) => {
  let dividers = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};

module.exports = getNumberDivisors
