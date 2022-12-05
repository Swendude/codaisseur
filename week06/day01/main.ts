let x: number | string = 5;
let personName: string = "Codaisseur";
let rain: boolean = false;
let animals: string[] = ["cow", "sheep"];

const double = (x: number): number => {
  return x * 2;
};
double(x);
interface Person {
  name: string;
  age: number;
  gender: boolean;
}

interface Teacher extends Person {
  speciality: string;
}

interface Student extends Person {
  favorite: string;
}

const sayHi = (p: Teacher | Student): string => {
  if ("speciality" in p) {
    return `Hello ${p.name}, your speciality is ${p.speciality}`;
  }
  if ("favorite" in p) {
    return `Hello ${p.name}, your speciality is ${p.favorite}`;
  }
  return `Hello`;
};

let swen: Teacher = { name: "Swen", age: 30, gender: false, speciality: "TS" };
let mahtab: Student = {
  name: "Mahtab",
  age: 42,
  gender: true,
  favorite: "React"
};

console.log(sayHi(swen));
console.log(sayHi(mahtab));

type Class = {
  teacher: Teacher;
  students: Student[];
};

type School = {
  name: string;
  //   classes: Class[];
  location: string | undefined;
};

let mySchool: School = {
  name: "Codaisseur",
  location: undefined
};

// let mySchool: School = {
//   name: "Codaisseur",
//   classes: [
//     {
//       teacher: { name: "Swen", age: 30, gender: false, speciality: "TS" },
//       students: ["Bob", "Alice"]
//     },
//     { teacher: "Karla", students: ["Jane", "Joe"] }
//   ]
// };
