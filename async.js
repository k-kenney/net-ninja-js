// async and await

const getTodos = async () => {

  const response = await fetch('todos/luigis.json');

  if(response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();

  return data;

};

getTodos()
.then(data => console.log('resolved', data))
.catch(err => console.log('rejected', err.message));



// fetch api - newer way

// fetch('todos/luigi.json').then((response) => {
//   console.log('resolved', response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch((err) => {
//   console.log('rejected', err);
// });


// old way

// const getTodos = (resource, callback) => {

//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       // console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         resolve(data);
//       } else if(request.readyState === 4) {
//         reject('error getting resource');
//       }
//     });


//     request.open('GET', resource);
//     request.send();
//   });
// };

// getTodos('todos/luigi.json').then(data => {
//   console.log('promise 1 resolved', data);
//   return getTodos('todos/mario.json');
// }).then(data => {
//   console.log('promise 2 resolved', data);
//   return getTodos('todos/shaun.json');
// }).then(data => {
//   console.log('promise 3 resolved', data);
// }).catch(err => {
//   console.log('promise refected:', err);
// })


// promise example

// const getSomething = () => {

//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve('some data');
//     // reject('some error');
//   });
// };

// getSomething().then (data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// });


// console.log(1);
// console.log(2);

// getTodos('todos/luigi.json', (err, data) => {
//   console.log(data);
//   getTodos('todos/mario.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/shaun.json', (err, data) => {
//       console.log(data);
//     });
//   });
// });

// console.log(3);
// console.log(4);
