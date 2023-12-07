/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origen: "",
  destino: "",
  largo: "",
  ancho: "",
  alto: "",
  peso: "",
  servicios: [],
  total: "",
};
const quoterSlice = createSlice({
  name: "shippingInfo",
  initialState,
  reducers: {
    setState: (state, action) => {
      const { origen, destino, largo, ancho, alto, peso, servicios, total } =
        action.payload;
      state.origen = origen;
      state.destino = destino;
      state.largo = largo;
      state.ancho = ancho;
      state.alto = alto;
      state.peso = peso;
      state.servicios = servicios;
      state.total = total;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    clearState: (state, action) => {
      state.origen = "";
      state.destino = "";
      state.largo = "";
      state.ancho = "";
      state.alto = "";
      state.peso = "";
      state.servicios = [];
      state.total = "";
    },
  },
});
export const { setState, clearState, setTotal } = quoterSlice.actions;
export default quoterSlice.reducer;
