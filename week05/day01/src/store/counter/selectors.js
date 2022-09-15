export const selectCurrentCount = (reduxState) =>
  reduxState.counter.currentCount;

export const selectPositiveOrNegative = (reduxState) => {
  if (reduxState.counter.currentCount > 0) {
    return "positive";
  } else {
    return "negative";
  }
};
