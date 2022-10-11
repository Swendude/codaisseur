// Arrays spreading
const students = ["Nigel", "Patryk", "Nadja", "Casper"];

const studentsCopy = [...students, "Esteban", ...students];

students.push("Akiko");

// console.log(students);
// console.log(studentsCopy);

// Object spreading

const student = { name: "Nigel", class: 62 };
const studentCopy = { ...student, class: 61, name: "Juan", favorite: false };

console.log(student);
console.log(studentCopy);
