function foo(a, b) {
  // Type checking using typeof
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Error: Both arguments must be numbers");
    return NaN; //Or handle it as per your requirements.
  }
}

console.log(foo(1, "1")); // Output: Error: Both arguments must be numbers
console.log(foo(1, 1)); // Output: 2