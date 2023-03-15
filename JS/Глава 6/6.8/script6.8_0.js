function printNumbers(from, to){
  let number=from;
  let time=setInterval(function() {
    alert(number);
    if (number == to) {
      clearInterval(time);
    }
    number++;
  },100)
}



function printNumbers(from, to) {
  let number = from;

  setTimeout(function go() {
    alert(number);
    if (number < to) {
      setTimeout(go, 1000);
    }
    number++;
  }, 1000);
}


