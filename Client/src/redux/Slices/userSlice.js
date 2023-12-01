// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn:false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = (action.payload);
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logouted : (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },  
  },
});

export const {logouted, login, addUser} = userSlice.actions;

export default userSlice.reducer;
