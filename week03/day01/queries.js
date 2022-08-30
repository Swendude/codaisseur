// Retrieve all the pets
const Pet = require("./models").Pet;

const getAllThePets = async () => {
  const allThePets = await Pet.findAll({ raw: true });
  console.log(allThePets);
};

const getTweety = async () => {
  const tweety = await Pet.findByPk(10, { raw: true });
  console.log(tweety);
};

const getDogs = async () => {
  const dogs = await Pet.findAll({
    where: { kind: "Dog", gender: true },
    raw: true
  });
  console.log(dogs);
};

const createClifford = async (newPet) => {
  await Pet.create(newPet);
};

const updatePet = async (id) => {
  const petToBeUpdated = await Pet.findByPk(id);
  petToBeUpdated.update({
    gender: !petToBeUpdated.gender
  });
};

const killPet = async (id) => {
  const petToBeKilled = await Pet.findByPk(id);
  petToBeKilled.destroy();
};

// getAllThePets();
// getTweety();
// getDogs();
// createClifford({
//   name: "Clifford",
//   kind: "Dog",
//   food: 10,
//   gender: false
// });

// updatePet(6);
killPet(6);