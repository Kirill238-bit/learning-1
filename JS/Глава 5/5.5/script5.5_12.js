// Add your code here
"use strict"
  function groupById(array) {
    return array.reduce((prev, curr) => {
      prev[curr.id] = curr;
      return prev;
    },{})
  }
  let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
  let usersById = groupById(users);