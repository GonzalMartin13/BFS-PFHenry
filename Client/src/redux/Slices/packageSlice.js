import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPackages: {},
  userPackages: [],
  userPackagesCopy: [],
  userPackagesDetail: {},
  userOrder: null,
  currentFilter: null,
  originalUserPackages: [], // Nuevo estado para almacenar la lista original sin filtros
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
      state.originalUserPackages = action.payload; // Inicializa la lista original
    },
    addUserPackageById: (state, action) => {
      state.userPackagesDetail = action.payload;
    },
    cleanDetail: (state) => {
      state.userPackagesDetail = {};
    },
    sort: (state, action) => {
      const order = action.payload;
      state.userPackages = [...state.originalUserPackages]; 
      state.userPackages.sort((a, b) => {
        const dateA = new Date(a.fechaInicial).getTime();
        const dateB = new Date(b.fechaInicial).getTime();
        return order === "Ascendente" ? dateA - dateB : dateB - dateA;
      });
      state.userOrder = order;
    },
    serviceFilter: (state, action) => {
      const selectedService = action.payload;
      state.currentFilter = selectedService;

      state.userPackages = [...state.originalUserPackages]; 
      state.userPackages = selectedService
        ? state.userPackages.filter((paquete) => {
            const serviciosArray = paquete.servicios
              .split(",")
              .map((s) => s.trim().toLowerCase());
            return serviciosArray.includes(selectedService.toLowerCase());
          })
        : state.userPackages;
    },

    reset: (state) => {
      state.userPackages = state.originalUserPackages;
    },
  },
});

export const {
  addPackage,
  addUserPackage,
  addUserPackageById,
  cleanDetail,
  sort,
  serviceFilter,
  reset,
} = PackageSlice.actions;
export default PackageSlice.reducer;
