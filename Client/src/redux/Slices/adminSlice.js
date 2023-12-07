
import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: [],
  reducers: { 
    setAdminList: (state, action) => {
      return action.payload;
    },
    toggleAdminActivation: (state, action) => {
      const index = state.findIndex(admin => admin.id === action.payload.id);
      if (index !== -1) {
        state[index].isActive = !state[index].isActive;
      }
    },
  },
});

export const { setAdminList, toggleAdminActivation } = adminSlice.actions;
export default adminSlice.reducer;
