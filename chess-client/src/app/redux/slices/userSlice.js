import { createSlice } from "@reduxjs/toolkit";

const userData = {};

const userSlice = createSlice({
  name: "user",
  initialState: userData,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const user = userSlice.reducer;
export const { addUser } = userSlice.actions;
