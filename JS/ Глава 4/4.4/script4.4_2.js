// Add your code here
"use sctrict"
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
  };
  ladder.up().up().down().showStep().down().showStep();