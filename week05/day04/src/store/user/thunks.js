import axios from "axios";
import { saveToken, saveProfile } from "./slice";

const getProfile = async (dispatch, token) => {
  const meResponse = await axios.get(
    "https://codaisseur-coders-network.herokuapp.com/me",
    { headers: { authorization: `Bearer ${token}` } }
  );

  dispatch(saveProfile(meResponse.data));
};

export const bootstrapLoginThunk = () => async (dispatch, getState) => {
  try {
    const tokenFromStorage = localStorage.getItem("token");
    if (!tokenFromStorage) {
      return;
    }
    dispatch(saveToken(tokenFromStorage));
    getProfile(dispatch, tokenFromStorage);
    // const meResponse = await axios.get(
    //   "https://codaisseur-coders-network.herokuapp.com/me",
    //   { headers: { authorization: `Bearer ${tokenFromStorage}` } }
    // );

    // dispatch(saveProfile(meResponse.data));
  } catch (error) {
    console.log(error);
  }
};

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
    localStorage.setItem("token", token);
    dispatch(saveToken(token));
    getProfile(dispatch, token);
    // const meResponse = await axios.get(
    //   "https://codaisseur-coders-network.herokuapp.com/me",
    //   { headers: { authorization: `Bearer ${token}` } }
    // );

    // dispatch(saveProfile(meResponse.data));
  } catch (error) {
    console.log(error);
  }
};
