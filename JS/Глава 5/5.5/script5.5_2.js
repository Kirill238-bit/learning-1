// Add your code here
"use sctrict"
function filterRangeInPlace(arr, a, b){
for(let i=0;i<arr.length;i++){
    let bol=arr[i];
    if(bol<a||bol>b){
        arr.splice(i,1);
        i--;
    }
}
}
