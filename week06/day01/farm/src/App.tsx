import React, { useState } from "react";
import "./App.css";
import AnimalBlock from "./components/AnimalBlock";
import { amountOfAnimals, Farm, farmToName } from "./farm";

function App() {
  const [farm, setFarm] = useState<Farm>({
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
  });
  return (
    <div className="App">
      <h1>{farmToName(farm)}</h1>
      <h2>Has {amountOfAnimals(farm)} animals</h2>
      {farm.animals.map((animal) => (
        <AnimalBlock animal={animal} />
      ))}

      {/* <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button> */}
    </div>
  );
}

export default App;
