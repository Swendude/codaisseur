type Gender = "male" | "female";

type Age = "young" | "old";

interface Farmer {
  name: string;
  gender: Gender;
  age: Age;
}

type Breed = "cow" | "sheep" | "chicken" | "pig" | "dog";

export interface Animal {
  name: string;
  breed: Breed;
  age: Age;
}

export interface Farm {
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

export const farmToName = (farm: Farm): string =>
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

export const animalToName = (animal: Animal): string =>
  `${breedToIcon(animal.breed)} ${animal.name} the ${animal.age} ${
    animal.breed
  }`;

export const amountOfAnimals = (farm: Farm): number => farm.animals.length;

export const addAnimal = (animal: Animal, farm: Farm): Farm => {
  return { ...farm, animals: [...farm.animals, animal] };
};
