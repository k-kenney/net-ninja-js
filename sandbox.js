// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// // names.sort();
// // names.reverse();
// console.log(names);

// const scores = [10, 5, 0, 40, 30, 10, 20, 70];
// // scores.reverse();
// // console.log(scores);

const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 50},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50},
];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// })

const promos = products
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);

// scores.sort((a,b) => a - b);
// console.log(scores);

// players.sort((a,b) => {
//   if(a.score > b.score) {
//     return -1;
//   } else if(b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// players.sort((a,b) => b.score - a.score);

// console.log(players);
