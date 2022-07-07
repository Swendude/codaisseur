import axios from "axios";
import { useState, useEffect } from "react";
import PokemonListItem from "../components/PokemonListItem";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState(null); // Either an array or null

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      setPokemons(response.data.results);
    };
    getPokemon();
  }, []);
  return (
    <div>
      <ul>
        {pokemons ? (
          pokemons.map((pokemon, i) => {
            return <PokemonListItem key={i} pokemonName={pokemon.name} />;
          })
        ) : (
          <p>Loading..</p>
        )}
      </ul>
    </div>
  );
};

export default PokemonPage;
