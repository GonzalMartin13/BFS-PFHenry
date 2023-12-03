// En tu store.js
import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../Slices/userSlice";
import packageReducer from "../Slices/packageSlice";
import quoterReducer from "../Slices/quoterslice";

import invoiceUserReducer from "../Slices/invoiceUserSlice";

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

    invoice: invoiceUserReducer,

    shipping: shippingReducer,
    packages: packageReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);