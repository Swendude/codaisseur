let x: number = 5;
x = 7;
// x = true;

let isFemale: boolean = true;
isFemale = false;

let myName: string = "swen";

let studentNames: (string | boolean)[] = ["Agnieszka", "Ynte", "Xiaodan"];
studentNames = [...studentNames, true];

function add(x: number | string, y: number): string {
  if (typeof x === "number") {
    return (x + y).toString();
  } else {
    return x + y;
  }
}

const specialArray = [add, add];

const arrowAdd = (x: number, y: number): number => {
  return x + y;
};

type Title = "PHD" | "MD" | "Dr" | "Engineer";

interface Doctor {
  name: string;
  titles: Title[];
  age: number;
  speciality: string;
}

type Animal = "Sheep" | "Cow" | "Horse";

interface AnimalDoctor extends Doctor {
  animal: Animal;
}

const doctors: (Doctor | AnimalDoctor)[] = [
  {
    name: "Doolittle",
    age: 42,
    titles: ["PHD"],
    speciality: "Animals",
    animal: "Horse"
  },
  {
    name: "Pepper",
    titles: ["Dr", "MD", "PHD"],
    age: 42,
    speciality: "Plastic surgery"
  }
];

const makeDoctorName = (d: Doctor | AnimalDoctor) => {
  return `${d.name}, ${d.titles.join(", ")}`;
};

const makeHello = <T extends { name: string }>(d: T) => {
  return `Hello ${d.name}`;
};

console.log(makeDoctorName(doctors[1]));
