// Add your code here
"use sctrict"
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
 return arr.slice().sort();
}
let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);
