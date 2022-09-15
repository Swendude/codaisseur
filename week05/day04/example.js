const divideBy = (y) => {
  return (x) => {
    return x / y;
  };
};

const halve = divideBy(2);
const third = divideBy(3);

console.log(halve(9));
console.log(third(9));

// dispatch(myThunk());
// dispatch(myThunk(5, 10));
// dispatch(myThunk);

// myThunk(dispatch, getstate);

const myThunk = (x, y) => (dispatch, getState) => {};
