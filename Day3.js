/*
Resourceful links for this session:
https://javascript.info/class-inheritance
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
https://scotch.io/tutorials/javascript-promises-for-dummies
*/

// ========= Class =========

// let counter = {
//   val: 0,
//   increment: function () {
//     this.val += 1;
//   };
// };
//
// function Persona() {
//   this.age = 0;
//
//   const that = this;
//
//   setInterval(function() {
//     that.age++;
//     console.log(that.age);
//   }, 1000);
// };
//
// const p = new Persona();

// ==================================================

class Person {
  constructor(name) {
    this.name = name;
  };

  getName() {
    return this.name;
  };
};

class Employee extends Person {
  constructor(name, title) { // urutan harus diperhatikan
    super(name);
    this.title = title;
  };

  doWork() {
    return this.name + " is working";
  };
};

let scott = new Employee("Scott Moss");
// console.log(scott.getName()); // "Scott Moss"
// console.log(scott.doWork()); // "Scott Moss is working"

// ==================================================

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  };

  sayName() {
    return 'Hi, I am a ' + this.name + '.';
  };

  getArea() {
    return this.height * this.width;
  };

  setArea(value) {
    return this.height = this.width = Math.sqrt(value);
  };
};

class Square extends Rectangle {
  constructor(length) {
    // Here, it calls the parent class' constructor with length, length
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  };
};

let kotak = new Square(10, 15); // 15 unneccessary, because Square only receive 1 argument
// console.log(kotak.height);
// console.log(kotak.width);
// console.log(kotak.name);
// console.log(kotak.sayName());
// console.log(kotak.getArea());
// console.log(kotak.setArea(64));
// console.log(kotak.getArea());

// Notes:
// When a normal constructor runs, it creates an empty object and continues with it.
// But when a derived constructor runs, it expects the parent constructor to do the job.
// So if we’re making a constructor of our own, then we must call super,
// because otherwise the object with 'this' reference to it won’t be created. And we’ll get an error.

// super() is called to avoid duplicating the constructor parts between the classes

// ==================================================

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  };

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  };

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped. Speed = ${this.speed}`);
  };
};

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  };

  // stop() {
  //   this.speed = -10;
  //   console.log(`${this.name} stopped. It's speed become ${this.speed}.`);
  // };

  // stop() {
  //   super.stop(); // call parent stop
  //   this.hide(); // and then hide
  // };
};

let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!
// rabbit.stop();

// Notes:
// Usually we don’t want to totally replace a parent method,
// but rather to build on top of it, tweak or extend its functionality.
// We do something in our method, but call the parent method before/after it or in the process.
// Now Rabbit has the stop method that calls the parent super.stop() in the process.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).

// ==================================================

// ========= Promise =========

// fetch('https://api.faketweet.com/tweets')
// .then(response => {
//   return response.json()
// }).then(tweets => {
//   return tweets.filter(tweet => {
//     return tweet.stars > 50;
//   })
// }).then(tweets => {
//   return tweets.filter(tweet => {
//     return tweet.rts > 50;
//   })
// }).catch(err => {
//   console.error(error);
// });
//
// fetch('https://api.faketweet.com/tweets')
// .then(response => response.json())
// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
// .catch(err => {
//   console.error(error);
// });

// ==================================================

const doSomething = function(argument) {
  return new Promise((resolve, reject) => {
    /*
    TODO: try to do something asynchronously
    and resolve or reject according to
    operation result.
    */
  });
};

// ==================================================

const setTimeoutPromise = (duration) => new Promise((resolve, reject) => {
  setTimeout(resolve, duration);
});

// setTimeoutPromise(1000).then(() => console.log("tick"));

// ==================================================
let isMomHappy = true;

// Promise
let willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    let phone = {
      brand: 'Samsung',
      color: 'black',
    };

    resolve(phone); // fulfilled
  } else {
    let reason = new Error('mom is not happy');

    reject(reason); // reject
  }
});

// console.log(willIGetNewPhone);

// call our promise
// let askMom = () => willIGetNewPhone
// .then(function (fulfilled) {
//   // yay, you got a new phone
//   console.log(fulfilled); // output: { brand: 'Samsung', color: 'black' }
//   return fulfilled
// })
// .catch(function (error) {
//   // oops, mom don't buy it
//   console.log(error.message); // output: 'mom is not happy'
// });
//
// askMom();

// ==================================================

// 2nd promise
let showOff = (phone) => {
  return new Promise((resolve, reject) => {
    let message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';

    resolve(message);
  });
};

// shorten it
// let showOff = (phone) => {
//   console.log(phone);
//   let message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
//
//   return Promise.resolve(message);
// };

// Notes:
// In this example, you might realize we didn't call the reject. It's optional.
// We can shorten this sample like using Promise.resolve instead.

// let askMom = () => willIGetNewPhone
// .then(showOff) // chain it here
// .then(function (fulfilled) {
//   console.log(fulfilled); // output: 'Hey friend, I have a new black Samsung phone.'
// })
// .catch(function (error) {
//   // oops, mom don't buy it
//   console.log(error.message); // output: 'mom is not happy'
// });
//
// askMom();

// ==================================================

// let askMom = () => {
//   console.log('before asking Mom'); // log before
//   willIGetNewPhone
//   .then(showOff)
//   .then(function (fulfilled) {
//     console.log(fulfilled);
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });
//   console.log('after asking mom'); // log after
// };
//
// askMom();

// Output:
// 1. before asking Mom
// 2. after asking mom
// 3. Hey friend, I have a new black Samsung phone.

// That's something we call asynchronous, the code will run without blocking or waiting for the result.
// Anything that need to wait for promise to proceed, you put that in .then.

// ========= async/await =========

// fetch('https://api.faketweet.com/tweets')
// .then(response => response.json())
// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
// .catch(err => {
//   console.error(error);
// });
//
// // ====> turned into
//
// const response = await fetch('https://api.faketweet.com/tweets');
// const tweets = await response.json();
// let tweets = tweets.filter(tweet => tweet.stars > 50);
// tweets = tweets.filter(tweet => tweet.rts > 50);
// console.log(tweets);
//
// // error: "Unresolved variable or type await"
//
// // ====> put async
//
// const fetchTweets = async () => {
//   const response = await fetch("https://api.faketweet.com/tweets");
//   const tweets = await response.json();
//   let tweets = tweets.filter(tweet => tweet.stars > 50);
//   tweets = tweets.filter(tweet => tweet.rts > 50);
//   console.log(tweets);
// };
//
// fetchTweets();
//
// // ====> IIFE (Immediately Invoked Function Expression)
//
// (async () => {
//   const response = await fetch("https://api.faketweet.com/tweets");
//   let tweets = await response.json();
//   let tweets = tweets.filter(tweet => tweet.stars > 50);
//   tweets = tweets.filter(tweet => tweet.rts > 50);
//   console.log(tweets.length);
// })();

// ==================================================

// call our promise
const askMom = async() => {
  try {
    console.log('before asking Mom');

    let phone = await willIGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
    console.log('after asking mom');
  }
  catch (error) {
    console.log(error.message);
  }
};

askMom();
