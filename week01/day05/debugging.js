// Syntax error: When you type something that is not expected (structure error)
// WE LIKE SYNTAX ERRORS
// Reference error: When you assume you declared something
// Type errors: When something is not the correct type

const DEBUG = false;

const zero = 0;
if (DEBUG) console.log("Zero equals ", zero);

const result = 4 / zero;

if (DEBUG) console.log("Result equals ", result);

// let done = false;
// while (!done) {
//   console.log("still running");
// }
// const funcs = require("./funcs");

// console.log(funcs.double(5));

// const cow = 10;
// const sheep = [1,2,3]
// cow.length();
