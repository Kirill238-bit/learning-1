function obj(name) {
  this.name = name;
}

let obj = new obj('John');
let obj2 = new obj.constructor('Pete');
