import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "../Slices/userSlice";
// import packageReducer from "../Slices/packageSlice";
import quoterReducer from "../Slices/quoterslice";
import shippingReducer from "../Slices/shippingSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    quoter: quoterReducer,
    shipping: shippingReducer,

    // packages: packageReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
