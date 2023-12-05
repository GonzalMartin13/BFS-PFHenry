// userSlice.js
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn:false,
  contador: 1,
  admin: {}
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
      state.contador = 3;
    },
    logouted : (state) => {
      state.user = {};
      state.isLoggedIn = false;
      state.contador = 1;
      state.admin = {};
    }, 
    contar: (state) => {
      state.contador = (state.contador + 1);
    }, 
    addAdmin: (state, action) => {
      state.admin = (action.payload);
    },
  },
});

export const {logouted, login, addUser, contar, addAdmin} = userSlice.actions;

export default userSlice.reducer;

