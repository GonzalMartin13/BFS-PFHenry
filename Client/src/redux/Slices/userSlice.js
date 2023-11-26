// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  logUsers: [],
  isLoggedIn:false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    logUser: (state, action) => {
      state.logUsers.push(action.payload);
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout : (state) => {
      state.isLoggedIn = false
    }
    
  },
});

export const { logout, login, addUser, logUser } = userSlice.actions;

export default userSlice.reducer;
