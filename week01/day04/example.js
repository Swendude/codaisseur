const subjects = require("./animals.json"); // GETS AUTOMAGICALLY PARSED

const json = JSON.stringify(subjects);
console.log(json);
// console.log(typeof JSON.parse(JSON.stringify(subjects)));
// console.log(subjects[0].owners[1].hobbies[0]);

// try {
//   const things = ["car", "shoe", "computer"];
//   console.log(things[4].length);
// } catch (error) {
//   console.log("something went wrong");
// }
