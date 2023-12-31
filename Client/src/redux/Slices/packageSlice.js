import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPackages = createAsyncThunk("packages/getPackages", async () => {
  try {
    const response = await axios.get("https://bfs-pfhenry-production.up.railway.app/envios");
    return response.data;
  } catch (error) {
    throw Error("Error al obtener los envíos", error);
  }
});

export const getUserPackages = createAsyncThunk("packages/getUserPackages", async (UserEmail) => {
  try {
    const response = await axios.get(`https://bfs-pfhenry-production.up.railway.app/envios/user/${UserEmail}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener envíos del usuario", error);
    throw error;
  }
});

export const getUserPackagesById = createAsyncThunk("packages/getUserPackagesById", async (id) => {
  try {
    const response = await axios.get(`https://bfs-pfhenry-production.up.railway.app/envios/${id}`);
    return response.data;
  } catch (error) {
    throw Error("Error al obtener el envío por ID", error);
  }
});

export const cleanDetailAction = createAsyncThunk("packages/cleanDetail", async (_, thunkAPI) => {
  thunkAPI.dispatch(cleanDetail());
});

const initialState = {
  allPackages: {},
  userPackages: [],
  userPackagesCopy: [],
  userPackagesDetail: {},
  userOrder: null,
  currentFilter: null,
  originalUserPackages: [],
};

export const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    serviceFilter: (state, action) => {
      const selectedService = action.payload;
      state.currentFilter = selectedService;
     
      state.userPackages = JSON.parse(JSON.stringify(state.originalUserPackages)); 
      state.userPackages = selectedService
        ? state.userPackages.filter((paquete) => {
            const serviciosArray = paquete.servicios
              .split(",")
              .map((s) => s.trim().toLowerCase());
            return serviciosArray.includes(selectedService.toLowerCase());
          })
        : state.userPackages;
     
      // Apply the sort on the filtered state
      state.userPackages.sort((a, b) => {
        const dateA = new Date(a.fechaInicial).getTime();
        const dateB = new Date(b.fechaInicial).getTime();
        return state.userOrder === "Ascendente" ? dateA - dateB : dateB - dateA;
      });
     },
     
     sort: (state, action) => {
      const order = action.payload;
      state.userOrder = order;
     
      // Apply the sort on the filtered state
      state.userPackages.sort((a, b) => {
        const dateA = new Date(a.fechaInicial).getTime();
        const dateB = new Date(b.fechaInicial).getTime();
        return order === "Ascendente" ? dateA - dateB : dateB - dateA;
      });
     },

    reset: (state) => {
      state.userPackages = JSON.parse(JSON.stringify(state.originalUserPackages));
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPackages.fulfilled, (state, action) => {
        state.allPackages = action.payload;
      })
      .addCase(getUserPackages.fulfilled, (state, action) => {
        state.userPackages = action.payload;
        state.originalUserPackages = action.payload;
      })
      .addCase(getUserPackagesById.fulfilled, (state, action) => {
        state.userPackagesDetail = action.payload;
      })
      .addCase(cleanDetailAction.fulfilled, (state) => {
        state.userPackagesDetail = {};
      });
  },
});

export const { addPackage, addUserPackage, addUserPackageById, cleanDetail, sort, serviceFilter, reset } = packageSlice.actions;
export default packageSlice.reducer;
