// Add your code here
"use sctrict"
function sumInput(){
let arr=[];
while(true){
  let number=prompt("Введите число",0);
  if(number===""||number===null||!isFinite(number)){ break;}
  arr.push(+number);
}
let sum=0;
for(let term of arr){
  sum+=term;
}
return sum;
}
alert(sumInput());