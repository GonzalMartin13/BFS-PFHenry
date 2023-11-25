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
  },
});
export const { setState } = quoterSlice.actions;
export default quoterSlice.reducer;
