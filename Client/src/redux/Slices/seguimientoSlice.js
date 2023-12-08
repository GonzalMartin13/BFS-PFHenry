// En tu slice de Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paqueteSeguimiento: {
    id: "",
    status: "",
  },
};

export const seguimiento = createSlice({
  name: "seguimiento",
  initialState,
  reducers: {
    setPaquetesSeguimientos: (state, action) => {
      const { id, status } = action.payload;
      state.paqueteSeguimiento.id = id;
      state.paqueteSeguimiento.status = status; 
    },
  },
});

export const { setPaquetesSeguimientos } = seguimiento.actions;
export default seguimiento.reducer;
