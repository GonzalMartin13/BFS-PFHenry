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
  imagen: "",
  numeroDeEnvio: "",
};
const shippingSlice = createSlice({
  name: "shippingData",
  initialState,
  reducers: {
    setShippingState: (state, action) => {
      const {
        imagen,
        origen,
        destino,
        largo,
        ancho,
        alto,
        peso,
        servicios,
        total,
      } = action.payload;
      state.origen = origen;
      state.destino = destino;
      state.largo = largo;
      state.ancho = ancho;
      state.alto = alto;
      state.peso = peso;
      state.servicios = servicios;
      state.total = total;
      state.imagen = imagen;
    },
    setImagen: (state, action) => {
      state.imagen = action.payload;
    },
    setNumeroDeEnvio: (state, action) => {
      state.numeroDeEnvio = action.payload;
    },

    clearShippingState: (state, action) => {
      state.origen = "";
      state.destino = "";
      state.largo = "";
      state.ancho = "";
      state.alto = "";
      state.peso = "";
      state.servicios = [];
      state.total = "";
      state.imagen = "";
      state.numeroDeEnvio = "";
    },
  },
});
export const {
  setShippingState,
  clearShippingState,
  setImagen,
  setNumeroDeEnvio,
} = shippingSlice.actions;
export default shippingSlice.reducer;
