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
  nombreRemitente: "",
  razonSocialRemitente: "",
  telefonoRemitente: "",
  emailRemitente: "",
  nombreDestinatario: "",
  razonSocialDestinatario: "",
  telefonoDestinatario: "",
  emailDestinatario: "",
  coordenadasOrigen: "",
  coordenadasDestino: [],
  direccionOrigen: [],
  direccionDestino: [],
  userID: "",
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
        nombreRemitente,
        razonSocialRemitente,
        telefonoRemitente,
        emailRemitente,
        nombreDestinatario,
        razonSocialDestinatario,
        telefonoDestinatario,
        emailDestinatario,
        coordenadasOrigen,
        coordenadasDestino,
        direccionOrigen,
        direccionDestino,
        userID,
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
      state.nombreRemitente = nombreRemitente;
      state.razonSocialRemitente = razonSocialRemitente;
      state.telefonoRemitente = telefonoRemitente;
      state.emailRemitente = emailRemitente;
      state.nombreDestinatario = nombreDestinatario;
      state.razonSocialDestinatario = razonSocialDestinatario;
      state.telefonoDestinatario = telefonoDestinatario;
      state.emailDestinatario = emailDestinatario;
      state.coordenadasOrigen = coordenadasOrigen
      state.coordenadasDestino = coordenadasDestino
      state.direccionOrigen = direccionOrigen
      state.direccionDestino = direccionDestino
      state.userID = userID
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
      state.numeroDeEnvio= "";
      state.nombreRemitente= "";
      state.razonSocialRemitente= "";
      state.telefonoRemitente= "";
      state.emailRemitente= "";
      state.nombreDestinatario= "";
      state.razonSocialDestinatario= "";
      state.telefonoDestinatario= "";
      state.emailDestinatario= "";
      state.coordenadasOrigen= "";
      state.coordenadasDestino= [];
      state.direccionOrigen= [];
      state.direccionDestino= [];
      state.userID= "";
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
