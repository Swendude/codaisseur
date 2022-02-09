const initialState = {
    posts: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'post/storePosts':
            {
                return {...state, posts: action.payload }
            }
        default:
            {
                return state;
            }
    }
}