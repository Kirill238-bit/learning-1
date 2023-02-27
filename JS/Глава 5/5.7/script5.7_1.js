// Add your code here
"use strict"
 function aclean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sort = arr[i]
    .toLowerCase()
    .split("")
    .sort()
    .join("");
    obj[sort] = arr[i];
  }
  return Object.values(obj);
}
