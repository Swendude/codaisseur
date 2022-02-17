const meSelector = (state) => state.auth.me;

const tokenSelector = (state) => state.auth.token;

export { meSelector, tokenSelector };
