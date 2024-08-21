const { log, dir } = require("console");
const path = require("path");

//! path.basename

// const fileName = path.basename("/user/test/file.txt");

// console.log(fileName);

//! path.dirname

// const fileName = path.dirname("/user/test/file.txt");
// console.log(fileName);

//! path.extname

// const fileName = path.extname("/user/test/file.txt");
// console.log(fileName);

//! path.join

// const joinedPath = path.join("/user", "test", "file.txt");

// console.log(joinedPath);

//! path.resolve

// const absolutePath = path.resolve("text", "file.txt");

// console.log(absolutePath);

//! path.isAbsolute

// const isAbs = path.isAbsolute("/user/test");
// console.log(isAbs);

//! path.palse

const parsePath = path.parse("/users/text/file.txt");

console.log(parsePath.dir);
console.log(parsePath.name);
console.log(parsePath.ext);
