//! Single Function Export
//! Object export
//! Named function export
//! Using export shorthand

//? Single Function Export

// const firstName = "Alice";

// const greet = (name) => {
//   return `Hello ${name}`;
// };

// module.exports = greet;

//? Object export

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// module.exports = {
//   myAdd: add,
//   mySubtract: subtract,
// };

//? Named function export

// module.exports.sayHi = (name) => {
//   return `Hi ${name}`;
// };

// module.exports.sayBye = function (name) {
//   return `goodbye ${name}!`;
// };

//? Using export shorthand

exports.sayHi = (name) => {
  return `Hi ${name}`;
};

exports.sayBye = function (name) {
  return `goodbye ${name}!`;
};
