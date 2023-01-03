import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logoutModal: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    showLogoutModal: (state) => {
      state.logoutModal = true;
    },
    hideLogoutModal: (state) => {
      state.logoutModal = false;
    },
  },
});

export const { showLogoutModal, hideLogoutModal } = globalSlice.actions;

export default globalSlice.reducer;
