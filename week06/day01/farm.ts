type Gender = "male" | "female";

type Age = "young" | "old";

interface Farmer {
  name: string;
  gender: Gender;
  age: Age;
}

type Breed = "cow" | "sheep" | "chicken" | "pig" | "dog";

interface Animal {
  name: string;
  breed: Breed;
  age: Age;
}

interface Farm {
  farmer: Farmer;
  animals: Animal[];
}

const farms: Farm[] = [
  {
    farmer: {
      name: "Mac Donald",
      gender: "male",
      age: "old"
    },
    animals: [
      {
        name: "Bello",
        breed: "cow",
        age: "old"
      },
      {
        name: "Lassie",
        breed: "dog",
        age: "young"
      }
    ]
  },
  {
    farmer: {
      name: "Wendy",
      gender: "female",
      age: "young"
    },
    animals: [
      {
        name: "Dolly",
        breed: "sheep",
        age: "young"
      },
      {
        name: "Shaun",
        breed: "sheep",
        age: "young"
      },
      {
        name: "Little",
        breed: "chicken",
        age: "young"
      },
      {
        name: "Babe",
        breed: "pig",
        age: "young"
      },
      {
        name: "Wilbur",
        breed: "pig",
        age: "young"
      }
    ]
  }
];

const farmToName = (farm: Farm): string =>
  `${farm.farmer.gender === "male" ? "🧑‍🌾" : "👩‍🌾"} ${farm.farmer.age} ${
    farm.farmer.name
  }'s Farm`;

const breedToIcon = (breed: Breed): string => {
  if (breed === "chicken") {
    return "🐓";
  }
  if (breed === "cow") {
    return "🐄";
  }
  if (breed === "sheep") {
    return "🐑";
  }
  if (breed === "pig") {
    return "🐖";
  }
  if (breed === "dog") {
    return "🐕";
  }
  return "☹️";
};

const animalToName = (animal: Animal): string =>
  `${breedToIcon(animal.breed)} ${animal.name} the ${animal.age} ${
    animal.breed
  }`;

const amountOfAnimals = (farm: Farm): number => farm.animals.length;

const addAnimal = (animal: Animal, farm: Farm): Farm => {
  return { ...farm, animals: [...farm.animals, animal] };
};

// console.log(farms.map((farm) => farmToName(farm)));
// console.log(farms.map((farm) => amountOfAnimals(farm)));
// console.log(
//   farms.map((farm) =>
//     addAnimal({ name: "bla", breed: "chicken", age: "old" }, farm)
//   )
// );

console.log(
  farms.map((farm) => farm.animals.map((animal) => animalToName(animal)))
);
