const Pet = require("./models").Pet;

const getAllPets = async () => {
  const allPets = await Pet.findAll();
  console.log(allPets);
};

const getSinglePet = async (id) => {
  const singlePets = await Pet.findByPk(id, { raw: true });
  console.log(singlePets);
};

getAllPets();
getSinglePet(1);
