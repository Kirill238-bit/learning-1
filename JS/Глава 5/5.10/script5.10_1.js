// Add your code here
"use strict"
 function topSalary(salaries){
   let max=0;
   let maxName=null;
   for(let[name,price]of Object.entires(salaries)){
     if(max<price){
       maxName=name;
       max=price;
     }
   }
   return maxName;
 }
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
