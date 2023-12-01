import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPackages: {},
  userPackages: [],
  userPackagesCopy:[],
  userPackagesDetail: {},
  userOrder: null,
  currentFilter: null
};

export const PackageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    addPackage: (state, action) => {
      state.allPackages = action.payload;
    },
    addUserPackage: (state, action) => {
      state.userPackages = action.payload;
      state.userPackagesCopy = action.payload
    },
    addUserPackageById: (state, action) => {
      state.userPackagesDetail = action.payload;
    },
    cleanDetail: (state) => {
      state.userPackagesDetail = {};
    },
    sort: (state, action) => {
      const order = action.payload; // 'Ascendente' o 'Descendente'
      state.userPackages.sort((a, b) => {
        const dateA = new Date(a.fechaInicial).getTime();
        const dateB = new Date(b.fechaInicial).getTime();
        return order === 'Ascendente' ? dateA - dateB : dateB - dateA;
      });
      state.userOrder = order; // Almacena el orden actual
    },
    serviceFilter: (state, action) => {
      const selectedService = action.payload;
      state.currentFilter = selectedService;

      // Si se selecciona un filtro, aplícalo; de lo contrario, muestra todos los paquetes
      state.userPackages = selectedService
        ? state.userPackages.filter((paquete) => paquete.servicios === selectedService)
        : state.userPackages;
    },
    reset:(state)=>{
      state.userPackages=state.userPackagesCopy
    }
  },
});

export const { addPackage, addUserPackage, addUserPackageById, cleanDetail, sort,serviceFilter,reset} = PackageSlice.actions;
export default PackageSlice.reducer;
