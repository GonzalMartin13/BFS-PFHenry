// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  contador: 1,
  admin: {},
  isProfile: false,
  goConfirmacion: false,
  goProfile: false,
  emails: ["dixongonzalezm2304@gmail.com", "bfspfhenry@gmail.com", "elgato696969@gmail.com"],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
      state.contador = 3;
    },
    logouted: (state) => {
      state.user = {};
      state.isLoggedIn = false;
      state.contador = 1;
      state.admin = {};
      state.isProfile = false;
      state.goConfirmacion = false;
      state.goProfile = false;
    },
    contar: (state) => {
      state.contador = state.contador + 1;
    },
    contadorInTwo: (state) => {
      state.contador = 2;
    },
    addAdmin: (state, action) => {
      state.admin = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      state.isProfile = true;
    },
    confirmed: (state, action) => {
      state.goConfirmacion = action.payload;
    },
    profiles: (state, action) => {
      state.goProfile = action.payload;
    },
  },
});

export const {
  logouted,
  login,
  addUser,
  contar,
  addAdmin,
  updateUser,
  confirmed,
  contadorInTwo,
  profiles,
} = userSlice.actions;

export default userSlice.reducer;
