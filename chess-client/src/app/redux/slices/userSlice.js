import { createSlice } from "@reduxjs/toolkit";

const userData = {
  IsLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userData,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const user = userSlice.reducer;
export const { setUser } = userSlice.actions;
export const User = (state) => state.user;
