// Add your code here
"use sctrict"
arr = [1, -2, 3, 4, -9, 6];
function getMaxSubSum(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        max= Math.max(max, sum);
      }
    }
    return max;
  }
console.log(getMaxSubSum(arr));