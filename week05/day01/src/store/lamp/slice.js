import { createSlice } from "@reduxjs/toolkit";
// NICE EXERCISE, TRY THIS
// const initialState = {
//   lamps: [
//     { power: false, color: "blue" },
//     { power: false, color: "blue" },
//     { power: false, color: "blue" }
//   ]
// };
const initialState = {
  lamps: [false, false, false]
};

const checkLamps = (lamps) => {
  if (lamps.filter(lamps).length > 2) {
    return false;
  } else {
    return true;
  }
};

export const lampSlice = createSlice({
  name: "lamp",
  initialState,
  reducers: {
    toggle: (state, action) => {
      const index = action.payload;

      const stateCopy = { ...state };
      stateCopy.lamps[index] = !stateCopy.lamps[index];
      if (checkLamps(stateCopy.lamps)) {
        state.lamps[index] = !state.lamps[index];
      }
    }
  }
});

// dispatch(toggle(1))

// BOILERPLATE
export const { toggle } = lampSlice.actions;

export default lampSlice.reducer;
