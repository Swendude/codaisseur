const initialState = {
  token: null,
  me: null,
};

export default function reducer(state = initialState, action) {
  console.log("auth reducer reveived", action);
  switch (action.type) {
    case "AUTH/tokenReceived": {
      return { ...state, token: action.payload };
    }
    default: {
      return state;
    }
  }
}
