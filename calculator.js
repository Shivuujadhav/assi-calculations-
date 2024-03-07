// calculator.js

// Basic Calculation Functions
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
  
  export function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  
  // Advanced Calculation Functions
  export function square(a) {
    return a * a;
  }
  
  export function cube(a) {
    return a * a * a;
  }
  
  export function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  export function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  