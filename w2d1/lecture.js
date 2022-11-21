const drinkBeverage = require("./drinkBeverage");

let bob = 9001;

try {
  bob = 42; // THROWING AN ERROR (UNCAUGHT EXCEPTION ERROR)
} catch (error) {
  console.log("OH NO.");
  console.log(error.message);
}

console.log("Weeeeee");

// drinkBeverage({ currentVolume: 0 }, 800);

const bobby = { a: 1 }; //  Reference
const bobbinator = {};
bobbinator.a = bobby.a;
bobby.a = 10;

console.log(bobby, bobbinator);

const bigObject = { a: 1, b: 2, c: 3, d: 4 };
const anotherBigObject = { ...bigObject };

// for (const key in bigObject) {
//   anotherBigObject[key] = bigObject[key];
// }

// Math.max(1, 2, 3, 4, 5, 6); => 6

const list = [1, 2, 3, 4, 5];
// 1, 2, 3, 4, 5
Math.max(...list);

// Higher Order Functions => Function that takes in callbacks
// Higher Order Functions => Function that returns a function definition

const obj = {
  name: "bob",
  method: function () {
    // ... this
    console.log(this);
  },
  arrowMethod: () => {
    console.log(this);
  },
};

// obj.arrowMethod();

// this.method = this.method.bind(this)
