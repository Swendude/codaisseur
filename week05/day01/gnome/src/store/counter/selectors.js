export const countSelector = (reduxState) => {
  console.log(reduxState);
  return reduxState.counter.value;
};
