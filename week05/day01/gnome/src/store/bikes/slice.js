import { createSlice } from "@reduxjs/toolkit";

// Garden
const initialState = {
  availabeOwners: [
    { name: "Swen" },
    { name: "Esteban" },
    { name: "Agnieszka" },
    { name: "Ynte" }
  ],
  bikes: [
    {
      id: 1,
      material: "metal",
      gears: 4,
      omaFiets: true,
      favorite: false,
      owners: [{ name: "Swen" }, { name: "Esteban" }]
    },
    {
      id: 5,
      material: "wood",
      gears: 2,
      omaFiets: false,
      favorite: false,
      owners: [{ name: "Agnieszka" }, { name: "Ynte" }]
    }
  ]
};

// Gnome
export const bikeSlice = createSlice({
  name: "bike",
  initialState: initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      state.bikes = state.bikes.map((bike) => {
        if (bike.id === id) {
          return { ...bike, favorite: !bike.favorite };
        } else {
          return bike;
        }
      });
    },
    deleteBike: (state, action) => {
      const id = action.payload;
      state.bikes = state.bikes.filter((bike) => bike.id !== id);
    }
  }
});

export const { toggleFavorite, deleteBike } = bikeSlice.actions;
export default bikeSlice.reducer;
