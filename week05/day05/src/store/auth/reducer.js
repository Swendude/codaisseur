const initialState = {
    accessToken: null,
    me: null
};

export default function reducer(state = initialState, action) {
    console.log('action', action);
    switch (action.type) {
        case "AUTH/tokenReceived":
            {
                return {...state, accessToken: action.payload };
            }
        case "AUTH/meReceived":
            {
                return {...state, me: action.payload };
            }
        case "AUTH/clearUserData":
            {
                return { accessToken: null, me: null };
            }
        default:
            {
                return state;
            }
    }
}