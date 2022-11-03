import { useEffect, useState } from "react";
import "./App.css";
// import { Route, Routes, Link, NavLink } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
// import HomePage from "./pages/HomePage";
// import StudentPage from "./pages/StudentPage";
import axios from "axios";

import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [pokemons, setPokemons] = useState(null);

  const getPokemons = async () => {
    const pokemonsResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon"
    );
    setPokemons(pokemonsResponse.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      {pokemons ? (
        pokemons.map((pokemon) => {
          return <p>{pokemon.name}</p>;
        })
      ) : (
        <p>Loading..</p>
      )}
      <h1>Hello</h1>
      {count > 0 ? <p>Hi, I am a message!</p> : <></>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide message
      </button>
      <Counter getter={count} setter={setCount} />
    </div>
  );
}

export default App;
