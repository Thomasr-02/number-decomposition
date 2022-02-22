const getNumberDivisors = require('../utils/getNumberDivisors');

describe('Should get all number divisors', () => {
  it('When getNumberDivisors receives 3, it should be returned [1, 3]', () => {
    const result = getNumberDivisors(3);
    
    expect(result).toEqual([1, 3]);
  });
  
  it('When getNumberDivisors receives invalid number, it should empty array', () => {
    expect(getNumberDivisors(-2)).toEqual(
      expect.arrayContaining([]),
    );
  })
  it('When getNumberDivisors receives null, it should empty array', () => {
    expect(getNumberDivisors(null)).toEqual(
      expect.arrayContaining([]),
    );
  })
  
});

