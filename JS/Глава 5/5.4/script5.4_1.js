// Add your code here
"use sctrict"
let arr=["Джаз","Блюз"];
arr.push("Рок-н-ролл");
for(let i=0;i<arr.length-1;i++){
    if(arr[i]==arr[(arr.length-1)/2]){
        arr[i]="Классика";
    }
}
console.log(arr.shift());
arr.unshift("Реп","Регги");