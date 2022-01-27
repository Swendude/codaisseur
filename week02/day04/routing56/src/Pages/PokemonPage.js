import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PokemonPage() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (name) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      console.log(response.data);
      setPokemon(response.data.sprites.back_default);
    } catch (e) {
      console.log("everything went wrong");
    }
  };

  useEffect(() => {
    console.log(params);
    getPokemon(params.name);
  }, [params.name]);

  return (
    <div className="App">
      <p>hello {params.name}</p>
      {pokemon ? <img src={pokemon} alt={params.name} /> : <p>Loading ...</p>}
    </div>
  );
}
export default PokemonPage;
