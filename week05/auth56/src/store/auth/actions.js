import axios from "axios";

const API_URL = "https://codaisseur-coders-network.herokuapp.com";

const tokenReceived = (token) => ({
  type: "AUTH/tokenReceived",
  payload: token,
});

const loginThunk = (email, password) => {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      const token = response.data.jwt;
      dispatch(tokenReceived(token));
    } catch (error) {
      console.log(error);
    }
  };
};

export { loginThunk };
