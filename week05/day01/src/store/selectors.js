export const selectCounter = (reduxState) => reduxState.counter.value;

export const selectLamp = (reduxState) => reduxState.lamp.lamps;

export const selectAllLampsOff = (reduxState) =>
  reduxState.lamp.lamps.every((lamp) => !lamp);
