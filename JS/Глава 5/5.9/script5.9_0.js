// Add your code here
"use strict"
function sumSalaries(salaries) {
  let sum = 0;
  for (let term of Object.values(salaries)) {
    sum += term;
  }
  return sum;
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
