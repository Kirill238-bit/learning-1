// Add your code here
"use strict"
function getAverageAge(users){
return users.reduce((prev,curr)=>prev+curr.age,0)/users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

