import "./App.css";
import AnimalBlock from "./AnimalBlock";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonResponseData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [inp, setInp] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInp(e.target.value);

  const handleCheckboxChange = () => setCheck(!check);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get<PokemonResponseData>(
        "https://pokeapi.co/api/v2/pokemon"
      );
      // console.log(response.)
      setPokemon(response.data.results);
    };
    getPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Hello Typescript!</h1>
      <AnimalBlock name="Bella" food={[]}>
        <p>I'm a child</p>
      </AnimalBlock>
      <p>{counter}</p>
      {/* <button onClick={() => setCounter(true)}>Illegal operation</button> */}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <input type="text" value={inp} onChange={(e) => handleChange(e)} />
      <input type="checkbox" checked={check} onChange={handleCheckboxChange} />
      <form onSubmit={(e) => console.log(e)}>
        <input value={"test"} />
        <button type="submit">Submit</button>
      </form>
      {pokemon !== null ? (
        pokemon.map((poke) => (
          <p>
            {poke.name} = {poke.url}
          </p>
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}

export default App;
