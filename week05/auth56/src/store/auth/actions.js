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

const userInfoReceived = (token, me) => ({
  type: "AUTH/userInfoReceived",
  payload: { me: me, token: token },
});

const logout = () => ({
  type: "AUTH/logout",
});

const bootstrapLoginThunk = async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(tokenReceived(token));
    const me_response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const me = me_response.data;
    dispatch(meReceived(me));
  } else {
    console.log("Token not in localstorage");
  }
};

const loginThunk = (email, password) => {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      const token = response.data.jwt;
      localStorage.setItem("token", token);
      dispatch(tokenReceived(token));

      const me_response = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const me = me_response.data;
      dispatch(meReceived(me));
    } catch (error) {
      console.log(error);
    }
  };
};

export { loginThunk, bootstrapLoginThunk, logout };
