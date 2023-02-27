// Add your code here
"use strict"
function unique(arr) {
  let arr2=[];
  for(let item of arr){
    if(!arr2.includes(item)) {
      arr2.push(item);
    }
  }
  return arr2; 
}

let strings = ["кришна", "кришна", "харе", "харе","харе", "харе", "кришна", "кришна", ":-O"];
alert(unique(strings));