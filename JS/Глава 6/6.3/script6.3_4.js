function inBetween(a, b){

  return function(x) {
    return x >= a && x <= b;
  }

}


function inArray(a,b){

return function (x){
  return arr.includes(x);
}

}