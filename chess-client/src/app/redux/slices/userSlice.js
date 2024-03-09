import { createSlice } from "@reduxjs/toolkit";

const username = true;

const userSlice = createSlice({
  name: "user",
  initialState: username,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const user = userSlice.reducer;
export const { getUser } = userSlice.actions;
