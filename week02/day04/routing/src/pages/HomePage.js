import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [getPokemons, setPokemons] = useState([]);

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
      {getPokemons.map((pokemon) => (
        <div>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
