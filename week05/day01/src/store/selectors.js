export const selectCount = (reduxState) => reduxState.amazon.count;

export const selectCountReadable = (cow) => {
  if (cow.amazon.count > 1000) {
    return "A lot of money";
  } else {
    return "Shit no money";
  }
};

export const selectBla = (reduxState) => reduxState.amazon.bla;
