// ======== Homework Promise, async/await =========
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    let result = array.map((element) => {
      if (typeof element === 'string') {
        return element.toUpperCase();
      } else {
        return element;
      }
    });

    resolve(result);
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    let result = array.sort();

    resolve(result);
  });
};

// makeAllCaps(arrayOfWords);
// sortWords(arrayOfWords);

makeAllCaps(complicatedArray)
.then((result) => console.log(result))
.catch(error => console.log(error))

sortWords(complicatedArray)
.then((result) => console.log(result))
.catch(error => console.log(error))

// ======== Homework ES6 Class =========

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  };

  move(x, y) {
    this.x = x;
    this.y = y;
  };
};

class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  };
};

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  };
};

class Eye extends Circle {
  constructor(id, x, y, radius, color) {
    super(id, x, y, radius);
    this.color = color;
  };

  roll(rollAmount) {
    super.move(this.x, this.y);
    this.x += rollAmount;
  };
};
