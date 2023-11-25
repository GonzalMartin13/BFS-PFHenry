import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
// import packageReducer from "../Slices/packageSlice";
import quoterReducer from "../Slices/quoterslice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    quoter: quoterReducer,
    // packages: packageReducer,
  },
});
