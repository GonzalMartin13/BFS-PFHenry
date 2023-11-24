import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
// import packageReducer from "../Slices/packageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // packages: packageReducer,
  },
});
