// Add your code here
"use sctrict"
function extractCurrencyValue(str){
return +str.slice(1);
}
alert(extractCurrencyValue("$120"));