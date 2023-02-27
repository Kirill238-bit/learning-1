// Add your code here
"use strict"
function getDateAgo(date, days){
let copDate=new Date(date);
copDate.setDate(date.getDate()-days);
return copDate.getDate();
}
let date = new Date(2015, 0, 2);