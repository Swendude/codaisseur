import axios from "axios";
const API_URL = "https://codaisseur-coders-network.herokuapp.com";

const tokenReceived = (token) => ({
  type: "AUTH/tokenReceived",
  payload: { token: token },
});

const meReceived = (me) => ({
  type: "AUTH/meReceived",
  payload: { me: me },
});

const clearToken = {
  type: "AUTH/clearToken",
};

const bootstrapLoginThunk = async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(tokenReceived(token));
    try {
      // use the token to get /me
      const meResponse = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const me = meResponse.data;
      dispatch(meReceived(me));
    } catch (error) {
      console.log("Something went wrong", error);
      dispatch(clearToken);
    }
  }
};

const loginThunk = (email, password) => {
  return async (dispatch, getState) => {
    try {
      // get the token
      const loginResponse = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      const token = loginResponse.data.jwt;
      localStorage.setItem("token", token);
      dispatch(tokenReceived(token));

      // use the token to get /me
      const meResponse = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const me = meResponse.data;
      dispatch(meReceived(me));
    } catch (error) {
      console.log("Something went wrong", error);
    }
    // dispatch(tokenReceived("token"));
  };
};

export { loginThunk, bootstrapLoginThunk };
