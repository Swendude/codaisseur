import axios from "axios";
import { recievePokemon } from "./slice";

export const getPokemon = async (dispatch, getState) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemon = response.data.results;
    dispatch(recievePokemon(pokemon));
  } catch (e) {
    console.log("ERROR", e);
  }
};
