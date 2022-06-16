import axios from "axios";
import { storeToken } from "./slice";

export const loginThunk = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const loginResponse = await axios.post(
        "https://codaisseur-coders-network.herokuapp.com/login",
        {
          email: email,
          password: password
        }
      );
      dispatch(storeToken(loginResponse.data.jwt));
    } catch (error) {
      console.log("ERROR in Login", error);
    }
  };
};
