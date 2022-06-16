import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [
    { id: 1, name: "post 1", comments: [1, 2] },
    { id: 2, name: "post 2", comments: [5] },
    { id: 4, name: "post 4", comments: [3, 4] }
  ],
  // Mapping over comments allows us to do something for every comment
  comments: [
    { id: 1, comment: "Great", userId: 1 },
    { id: 2, comment: "Stupid", userId: 3 },
    { id: 3, comment: "Horrible", userId: 1 },
    { id: 4, comment: "Amazing", userId: 2 },
    { id: 5, comment: "Awful", userId: 2 }
  ],
  // with find() i can find a user with a specific ID
  users: [
    { id: 1, name: "Ingrid" },
    { id: 2, name: "Shikha" },
    { id: 3, name: "Gonzalo" }
  ]
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {} = postSlice.actions;

export default postSlice.reducer;
