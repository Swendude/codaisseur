const selectToken = (reduxState) => reduxState.auth.token;
const selectMe = (reduxState) => reduxState.auth.me;
export { selectToken, selectMe };
