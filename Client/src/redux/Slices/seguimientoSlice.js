// En tu slice de Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paqueteSeguimiento: {
    id: "",
    status: "", // Agregamos el campo para almacenar el estado del paquete
  },
};

export const seguimiento = createSlice({
  name: "seguimiento",
  initialState,
  reducers: {
    setPaquetesSeguimientos: (state, action) => {
      const { id, status } = action.payload;
      state.paqueteSeguimiento.id = id;
      state.paqueteSeguimiento.status = status; // Guardamos el estado del paquete
    },
  },
});

export const { setPaquetesSeguimientos } = seguimiento.actions;
export default seguimiento.reducer;
