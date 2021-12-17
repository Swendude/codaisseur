import axios from "axios";

const API_URL = "https://codaisseur-coders-network.herokuapp.com";

const tokenReceived = (token) => ({
    type: "AUTH/tokenReceived",
    payload: token,
});

const meReceived = (me) => ({
    type: "AUTH/meReceived",
    payload: me,
});

const clearUserData = () => ({
    type: "AUTH/clearUserData"
});


export async function logout(dispatch, getState) {
    localStorage.removeItem('token');
    dispatch(clearUserData());
}

export async function bootstrapLoginState(dispatch, getState) {
    const token = localStorage.getItem('token')
    if (token) {
        dispatch(tokenReceived(token));
        const response_me = await axios.get(`${API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(meReceived(response_me.data))
    }
}

export function login(email, password) {
    return async function thunk(dispatch, getState) {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email: email,
                password: password,
            });
            const token = response.data.jwt;
            localStorage.setItem('token', token);
            dispatch(tokenReceived(token));

            const response_me = await axios.get(`${API_URL}/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(meReceived(response_me.data))

        } catch (error) {
            console.log("something went wrong!");
            console.log(error.message);
        }
    };
}