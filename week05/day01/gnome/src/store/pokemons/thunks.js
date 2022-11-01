import axios from "axios";
import { receivePokemon } from "./slice";

export const getPokemons = () => async (dispatch, getState) => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const pokemon = response.data.results;
  dispatch(receivePokemon(pokemon));
};

export const getPokemonByName = (name) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    const pokemon = response.data;
    dispatch(receivePokemon(pokemon));
  };
};
