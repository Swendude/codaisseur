const initialState = {
  token: null,
  me: null,
};

export default function reducer(state = initialState, action) {
  console.log("auth reducer reveived", action);
  switch (action.type) {
    case "AUTH/tokenReceived": {
      return { ...state, token: action.payload.token };
    }
    case "AUTH/meReceived": {
      return { ...state, me: action.payload.me };
    }
    case "AUTH/userInfoReceived": {
      return { ...state, token: action.payload.token, me: action.payload.me };
    }
    case "AUTH/logout": {
      localStorage.removeItem("token");
      return { ...state, token: null, me: null };
    }
    default: {
      return state;
    }
  }
}
