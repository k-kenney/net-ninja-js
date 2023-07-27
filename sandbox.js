const todos = [
  {text: 'play mariocart', author: 'shaun'},
  {text: 'buy milk', author: 'mario'},
  {text: 'buy bread', author: 'luigi'}
]

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));







// // store data in local storage
// localStorage.setItem('name', 'mario');
// localStorage.setItem('age', 50);


// // get data from local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(name, age);

// // update data
// // localStorage.setItem('name', 'luigi');
// // localStorage.age = '40'

// // name = localStorage.getItem('name');
// // age = localStorage.getItem('age');
// // console.log(name, age);

// // deleting data from local storage
// // localStorage.removeItem('name');
// localStorage.clear();

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(name, age);
