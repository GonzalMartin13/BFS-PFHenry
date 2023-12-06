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
import seguimientoReducer from "../Slices/seguimientoSlice"
import reviewsReducer from "../Slices/reviewsSlice"

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
    seguimiento:seguimientoReducer,
    reviews:reviewsReducer
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);