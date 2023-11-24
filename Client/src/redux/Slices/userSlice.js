// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  logUsers: [],
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
  },
});

console.log(initialState);

export const { addUser, logUser } = userSlice.actions;

export default userSlice.reducer;
