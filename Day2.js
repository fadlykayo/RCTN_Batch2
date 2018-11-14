/*
Resourceful links for this session:
https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4
https://javascriptplayground.com/real-life-es6-arrow-fn/
https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946
https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
*/

// ===== this keyword =====

// function API() {
//   this.uri = 'http://www.my-hipster-api.io/';
// }
//
// // let's pretend this method gets all documents at
// // a specific RESTful resource...
// API.prototype.get = function(resource) {
//   return new Promise(function(resolve, reject) {
//     // this doesn't work
//     http.get(this.uri + resource, function(data) {
//       resolve(data);
//     });
//   });
// };
//
// var api = new API();
//
// // Notes:
// /*
// this.uri is undefined
//
// Why would this be? Well, when we call new Promise(),
// we’re calling a constructor of another object,
// which creates a new lexical this in turn.
// Put simply, this.uri is not in scope.
// */
//
// // Workarounds:
//
// function API() {
//   this.uri = 'http://www.my-hipster-api.io/';
// };
//
// API.prototype.get = function(resource) {
//   var self = this; // a-ha! we'll assign to a local var
//   return new Promise(function(resolve, reject) {
//     // this works!
//     http.get(self.uri + resource, function(data) {
//       resolve(data);
//     });
//   });
// };
//
// function API() {
//   this.uri = 'http://www.my-hipster-api.io/';
// };
//
// API.prototype.get = function(resource) {
//   return new Promise(
//     function(resolve, reject) {
//       // this works!
//       http.get(this.uri + resource, function(data) {
//         resolve(data);
//       });
//     }.bind(this)
//   );
// };
//
// /*
// Kekurangan:
// 1. If we decide to nest a few callbacks within each other,
// and they all need access to the outer function’s this keyword,
// then we have to affix .bind() to every nested function.
//
// 2. There are also performance implications in using .bind().
// */
//
// function API() {
//   this.uri = 'http://www.my-hipster-api.io/';
// };
//
// API.prototype.get = function(resource) {
//   return new Promise((resolve, reject) => {
//     http.get(this.uri + resource, function(data) {
//       resolve(data);
//     });
//   });
// };
//
// /*
// Kelebihan:
// 1. It actually binds the context of the Promise’s 'this' to the context of the function that contains it
//
// 2. This avoids having to use bind or the dreaded var self = this trick to keep a reference to the desired scope.
// */

// ===== Arrow function =====

/*
In code with multiple nested functions,
it can be difficult to keep track of and remember to bind the correct this context.
In ES5, you can use workarounds like the .bind method (which is slow)
or creating a closure using var self = this
Benefits:
1. Arrow functions allow you to retain the scope of the caller inside the function,
you don’t need to create self = this closures or use bind (lexical binding of this)
2. Shorter syntax
*/

// // EXAMPLES
// // ==================================================
//
// // ES5
// var multiplyES5 = function(x, y) {
//   return x * y;
// };
//
// // ES6
// const multiplyES6 = (x, y) => { return x * y };
//
// // ==================================================
//
// //ES5
// var phraseSplitterEs5 = function phraseSplitter(phrase) {
//   return phrase.split(' ');
// };
//
// //ES6
// const phraseSplitterEs6 = phrase => phrase.split(" ");
//
// console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]
//
// // ==================================================
//
// //ES5
// var setNameIdsEs5 = function setNameIds(id, name) {
//   return {
//     id: id,
//     name: name
//   };
// };
//
// // ES6
// var setNameIdsEs6 = (id, name) => ({ id: id, name: name });
//
// console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}
//
// // ==================================================
// // MAP
//
// const smartPhones = [
//   { name:'iphone', price:649 },
//   { name:'Galaxy S6', price:576 },
//   { name:'Galaxy Note 5', price:489 }
// ];
//
// // ES5
// var prices = smartPhones.map(function(smartPhone) {
//   return smartPhone.price;
// });
//
// console.log(prices); // [649, 576, 489]
//
// // ES6
// const prices = smartPhones.map(smartPhone => smartPhone.price);
//
// console.log(prices); // [649, 576, 489]
//
// // ==================================================
// // MAP
//
// var users = [
//   { name: 'Jack', age: 21 },
//   { name: 'Ben', age: 23 },
//   { name: 'Adam', age: 22 },
// ];
//
// var agesDoubled = users.map(user => {
//   var age = user.age;
//   return age * 2;
// });
//
// // ==================================================
// // FILTER
//
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// // ES5
// var divisibleByThrreeES5 = array.filter(function (v){
//   return v % 3 === 0;
// });
//
// // ES6
// const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);
//
// console.log(divisibleByThrreeES6); // [3, 6, 9, 12, 15]
//
// // ==================================================
// // REDUCE
//
// var users = [
//   { name: 'Jack', age: 21 },
//   { name: 'Ben', age: 23 },
//   { name: 'Adam', age: 22 },
// ];
//
// var ages = users.map(user => user.age);
// var sum = ages.reduce((a, b) => a + b);
// console.log(sum);
//
// // ==================================================

// ===== Exercises =====

data = [
  {
    name: 'Super',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 2,
    type: 'cat'
  },
  {
    name: 'Hot',
    age: 2,
    type: 'dog'
  },
  {
    name: 'Purr',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Red',
    age: 4,
    type: 'dog'
  },
  {
    name: 'Besto',
    age: 3,
    type: 'cat'
  },
  {
    name: 'Peppers',
    age: 1,
    type: 'dog'
  },
];

/*
Exersice 1
1. Select only the dogs
2. Select their ages then multiply their ages by 3
3. Sum the results
*/

// // ==================================================
// function getAges(data) {
//   let sum = 0;
//   for (var i = 0; i < data.length; i++){
//     if (data[i].type === 'dog'){
//       let tempAge = data[i].age;
//       sum += (tempAge * 3);
//     }
//   }
//   return sum;
// };
// console.log(getAges(data)); // ages = 30
// // ==================================================
// let ages = data
//   .filter((animal) => {
//     return animal.type === 'dog';
// }).map((animal) => {
//     return animal.age * 3
// }).reduce((sum, age) => {
//     return sum + age;
// }, 0);
// console.log(ages); // ages = 30
// // ==================================================
// let isDog = (animal) => {
//   return animal.type === 'dog';
// };
// let dogYears = (animal) => {
//   return animal.age * 3;
// };
// let sum = (sum, age) => {
//   return sum + age;
// };
// let ages = data
//   .filter(isDog)
//   .map(dogYears)
//   .reduce(sum, 0);
// console.log(ages); // ages = 30
// // ==================================================

/*
Exersice 2
1. Select only the dogs
2. Select their name only
3. Concat their names
*/

// let result = data
//   .filter((animal) => {
//     return animal.type === 'dog';
// }).map((animal) => {
//     return animal.name;
// }).reduce((acc, name) => {
//     return acc + ' ' + name;
// }, '');
//
// console.log(result);

// ==================================================

// Exersice 3

// let spotifySongs = [
//   {id: 0, name: 'Curl_of_the_Blue', duration: 204},
//   {id: 1, name: 'Oblivion', duration: 306},
//   {id: 2, name: 'Flying_Whales', duration: 444},
//   {id: 3, name: 'L_Enfant_Sauvage', duration: 246},
// ];
//
// let fmSongs = [
//   {id: 4, name: 'Chop_Suey', duration: 192},
//   {id: 5, name: 'Throne', duration: 186},
//   {id: 6, name: 'Destrier', duration: 132},
//   {id: 7, name: 'Out of the Black', duration: 240},
// ];
//
// let allSongs = [spotifySongs, fmSongs];
//
// let result = allSongs
// .reduce((acc, song) => acc.concat(song), [])
// .map(song => {
//   let { id, ...otherKey } = song;
//   let songName = song.name;
//
//   return {
//     ...otherKey, // see other option
//     [songName]: id,
//     duration: Math.round(song.duration / 60),
//   };
// })
// .filter(song => song.duration > 3)
// .map(song => song.name)
// .join(' ')
//
// console.log(result);

// Other option:
// var o1 = { a: 1 };
// var o2 = { b: 2 };
// var o3 = { c: 3 };
//
// var obj = Object.assign({}, o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
