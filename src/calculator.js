#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
 */

const readline = require('readline');

// Exported for testing
function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
    case 'x':
    case '×':
      return a * b;
    case '/':
    case '÷':
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    default:
      throw new Error('Unsupported operation');
  }
}

function prompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter calculation (e.g., 2 + 2): ', (input) => {
    const match = input.match(/\s*(-?\d+(?:\.\d+)?)\s*([+\-*/x×÷])\s*(-?\d+(?:\.\d+)?)/);
    if (!match) {
      console.log('Invalid input. Format: number operator number');
      rl.close();
      return;
    }
    const a = parseFloat(match[1]);
    const op = match[2];
    const b = parseFloat(match[3]);
    try {
      const result = calculate(a, b, op);
      console.log(`Result: ${result}`);
    } catch (err) {
      console.log('Error:', err.message);
    }
    rl.close();
  });
}

if (require.main === module) {
  prompt();
}

function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(n);
}

module.exports = { calculate, modulo, power, squareRoot };
