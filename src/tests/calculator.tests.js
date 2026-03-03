const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('Calculator - Basic Operations', () => {
  test('addition: adds two numbers', () => {
    expect(addition(2, 3)).toBe(5);
    expect(addition(-1, 1)).toBe(0);
    expect(addition(0, 0)).toBe(0);
  });

  test('subtraction: subtracts two numbers', () => {
    expect(subtraction(5, 3)).toBe(2);
    expect(subtraction(0, 5)).toBe(-5);
    expect(subtraction(-3, -2)).toBe(-1);
  });

  test('multiplication: multiplies two numbers', () => {
    expect(multiplication(4, 3)).toBe(12);
    expect(multiplication(-2, 5)).toBe(-10);
    expect(multiplication(0, 100)).toBe(0);
  });

  test('division: divides two numbers', () => {
    expect(division(10, 2)).toBe(5);
    expect(division(7, 2)).toBe(3.5);
    expect(division(-6, 3)).toBe(-2);
  });

  test('division: throws error on division by zero', () => {
    expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('Calculator - Extended Operations', () => {
  test('modulo: returns remainder of a divided by b', () => {
    expect(modulo(10, 3)).toBe(1);
    expect(modulo(7, 2)).toBe(1);
    expect(modulo(6, 3)).toBe(0);
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo: throws error on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });

  test('power: returns base raised to the exponent', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 0)).toBe(1);
    expect(power(3, 2)).toBe(9);
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot: returns square root of a number', () => {
    expect(squareRoot(9)).toBe(3);
    expect(squareRoot(4)).toBe(2);
    expect(squareRoot(0)).toBe(0);
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test('squareRoot: throws error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed');
    expect(() => squareRoot(-9)).toThrow('Square root of a negative number is not allowed');
  });
});
