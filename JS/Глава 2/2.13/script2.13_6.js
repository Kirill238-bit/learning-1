// Add your code here
"use sctrict"
let n=10;
next:
for(let i=1;i<=n;i++){
for(let j=2;j<=i/2;j++){
if(i%j==0){
  continue next;}
}
alert(i);
}