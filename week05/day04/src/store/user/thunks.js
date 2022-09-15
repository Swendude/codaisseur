import axios from "axios";
import { saveToken, saveProfile } from "./slice";

export const loginThunk = (email, password) => async (dispatch, getState) => {
  try {
    const loginResponse = await axios.post(
      "https://codaisseur-coders-network.herokuapp.com/login",
      {
        email: email,
        password: password
      }
    );
    const token = loginResponse.data.jwt;
    dispatch(saveToken(token));

    const meResponse = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/me",
      { headers: { authorization: `Bearer ${token}` } }
    );

    dispatch(saveProfile(meResponse.data));
  } catch (error) {
    console.log(error);
  }
};
