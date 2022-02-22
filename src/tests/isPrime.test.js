const isPrime = require('../utils/isPrime');
describe('Should validade if is number prime', () => {
  it('When isPrime receive 3, should be returned true', () => {
    expect(isPrime(3)).toEqual(true);
  });
  it('When isPrime receive primer negative number, should be returned true', () => {
    expect(isPrime(-3)).toEqual(true);
  });
  it('When isPrime receive null, should be returned false', () => {
    expect(isPrime(null)).toEqual(false);
  });
  
});
