// Add your code here
"use strict"
   function Calculator(){
    this.methods={
      "-":(a,b)=>a-b,
      "+":(a,b)=>a+b
    };

 this.calculate=function(str){
   let abor=str.split(" "),
     a=+abor[0],
     or=abor[1],
     b=+abor[2]
     return this.methods[or](a,b);
 }

 this.addMethod=function(name,func){
   this.methods[name]=func;
 };
}