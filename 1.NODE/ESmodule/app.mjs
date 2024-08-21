//! Dafault Export
// import greet from "./utilis.mjs";

// console.log(greet("Agnes"));

//! Name Export
// import { add, subtract } from "./utilis.mjs";

// console.log(add(10, 3));
// console.log(subtract(10, 3));

//! Mixed Export(Default + Named)
// import greet, { add, subtract } from "./utilis.mjs";
// console.log("Agnes");

// console.log(add(10, 3));
// console.log(subtract(10, 3));

//! Mixed Export everything
import * as utilis from "./utilis.mjs";

console.log(utilis.add(10, 5));
console.log(utilis.subtract(10, 5));
