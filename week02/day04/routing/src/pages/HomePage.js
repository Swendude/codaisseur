import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [getPokemons, setPokemons] = useState(null);
  const [getInputText, setInputText] = useState("");
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      console.log(response.data.results);
      setPokemons(response.data.results);
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={getInputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      {getPokemons ? (
        getPokemons
          .filter((pokemon) => pokemon.name.length === getInputText.length)
          .map((pokemon) => (
            <div>
              <p>{pokemon.name}</p>
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
      {/* if (getPokemons) {
        getPokemons.map((pokemon) => (
          <div>
            <p>{pokemon.name}</p>
          </div>
        ))
      } else {
        <p>Loading...</p>
      } */}
    </div>
  );
};

export default HomePage;
