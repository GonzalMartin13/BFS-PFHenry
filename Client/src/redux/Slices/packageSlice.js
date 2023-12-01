import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPackages: {},
  userPackages: {},
  userPackagesDetail: {},
};

export const PackageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    addPackage: (state, action) => {
      state.allPackages = action.payload;
    },
    addUserPackage: (state, action) => {
      state.userPackages = (action.payload);
    },
    addUserPackageById: (state, action) => {
      state.userPackagesDetail = action.payload;
    },
    cleanDetail: (state) => {
      state.userPackagesDetail = {};
    },
  },
});

export const { addPackage, addUserPackage, addUserPackageById, cleanDetail } = PackageSlice.actions;
export default PackageSlice.reducer;
