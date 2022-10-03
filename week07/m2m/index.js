const Teacher = require("./models").teacher;

const getAllTeachers = async () => {
  const allTeachers = await Teacher.findAll();
  console.log(allTeachers);
};

getAllTeachers();
