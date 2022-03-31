const initialState = {
  token: null,
  me: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH/tokenReceived": {
      return { ...state, token: action.payload.token };
    }
    case "AUTH/meReceived": {
      return { ...state, me: action.payload.me };
    }
    default: {
      return state;
    }
  }
}
