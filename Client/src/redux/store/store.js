import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
// import packageReducer from "../Slices/packageSlice";
import quoterReducer from "../Slices/quoterslice";
import shippingReducer from "../Slices/shippingSlice";
export const store = configureStore({
  reducer: {
    quoter: quoterReducer,
    user: userReducer,
    shipping: shippingReducer,
    // packages: packageReducer,
  },
});
