const { calculate, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });

  test('subtracts 10 - 4 to equal 6', () => {
    expect(calculate(10, 4, '-')).toBe(6);
  });

  test('multiplies 45 * 2 to equal 90', () => {
    expect(calculate(45, 2, '*')).toBe(90);
    expect(calculate(45, 2, 'x')).toBe(90);
    expect(calculate(45, 2, '×')).toBe(90);
  });

  test('divides 20 / 5 to equal 4', () => {
    expect(calculate(20, 5, '/')).toBe(4);
    expect(calculate(20, 5, '÷')).toBe(4);
  });

  test('division by zero throws error', () => {
    expect(() => calculate(10, 0, '/')).toThrow('Division by zero');
    expect(() => calculate(10, 0, '÷')).toThrow('Division by zero');
  });

  test('unsupported operation throws error', () => {
    expect(() => calculate(2, 2, '^')).toThrow('Unsupported operation');
  });

  test('handles negative numbers', () => {
    expect(calculate(-5, 3, '+')).toBe(-2);
    expect(calculate(-5, -3, '-')).toBe(-2);
    expect(calculate(-5, 3, '*')).toBe(-15);
    expect(calculate(-6, -2, '/')).toBe(3);
  });

  test('handles decimals', () => {
});

describe('Calculator extended operations', () => {
  test('modulo with 5 % 2 to equal 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws error', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });

  test('power with 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent', () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test('square root with √16 to equal 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root with 0 to equal 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of negative throws error', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of negative number');
  });
});

test('handles decimals', () => {
    expect(calculate(2.5, 0.5, '+')).toBe(3);
    expect(calculate(2.5, 0.5, '-')).toBe(2);
    expect(calculate(2.5, 0.5, '*')).toBe(1.25);
    expect(calculate(2.5, 0.5, '/')).toBe(5);
  });
});
