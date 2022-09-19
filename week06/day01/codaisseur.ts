console.log([1, 2, 3, 4].find);

// interface Student {
//   name: string;
// }

// interface Teacher {
//   name: string;
// }

// interface Class {
//   name: string;
//   startingDate: Date;
//   students: Student[];
//   courseKey: keyof CourseOffering;
// }

// type CourseOffering = { [key: number]: Course };

// interface Course {
//   name: string;
//   teachers: Teacher[];
// }

// interface School {
//   name: string;
//   classes: Class[];
//   courses: CourseOffering;
// }

// const codaisseur: School = {
//   name: "Codaisseur",
//   classes: [
//     {
//       name: "61",
//       startingDate: new Date(),
//       students: [{ name: "Tim" }, { name: "Jaclyn" }, { name: "Maria" }],
//       courseKey: 1
//     }
//   ],
//   courses: {
//     0: { name: "ATC", teachers: [] },
//     1: { name: "Academy", teachers: [{ name: "Karla" }] },
//     2: { name: "Cyber", teachers: [] }
//   }
// };

// const releaseStudent = (
//   school: School,
//   className: string,
//   studentName: string
// ): School => {
//   const targetClass = school.classes.find(
//     (_class) => _class.name === className
//   );
//   if (targetClass) {
//     const newClass: Class = {
//       ...targetClass,

//       students: targetClass.students.filter(
//         (student) => student.name !== studentName
//       )
//     };
//     return {
//       ...school,
//       classes: school.classes.map((_class) => {
//         if (_class.name === className) {
//           return newClass;
//         } else {
//           return _class;
//         }
//       })
//     };
//   }
//   return school;
// };

// console.log(JSON.stringify(codaisseur));
// console.log("-----------");
// console.log(JSON.stringify(releaseStudent(codaisseur, "61", "Tim")));
