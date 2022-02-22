// O(sqrt(n)) Time | O(1) Space
const isPrime = (num) => {
  if (num ===null) return false;
  const squareRootNumber = Math.sqrt(num);
  for(let i = 2; i <= squareRootNumber; i++)
    if(num % i === 0) return false; 
  return true;
};

module.exports = isPrime