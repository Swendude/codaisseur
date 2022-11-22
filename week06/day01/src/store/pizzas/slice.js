import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "Diavola" },
    { id: 4, name: "Funghi" },
    { id: 19, name: "Hawaii" }
  ]
};

export const pizzaSlice = createSlice({
  name: "Pizzas",
  initialState: initialState,
  reducers: {}
});

export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
