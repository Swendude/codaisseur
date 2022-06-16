import axios from "axios";
import { storeToken, storeMe } from "./slice";

export const bootstrapLoginThunk = async (dispatch, getState) => {
  // get the token from localstorage
  const token = localStorage.getItem("token");
  if (token) {
    try {
      dispatch(storeToken(token));
      const meResponse = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/me",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      dispatch(storeMe(meResponse.data));
    } catch (error) {
      console.log("ERROR in bootstrapping", error);
    }
  }
};

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

      const token = loginResponse.data.jwt;
      localStorage.setItem("token", token);
      dispatch(storeToken(token));

      const meResponse = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/me",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      dispatch(storeMe(meResponse.data));
    } catch (error) {
      console.log("ERROR in Login", error);
    }
  };
};
