import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logoutModal: false,
  sideBarModal: false,
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
    showSideBarModal: (state) => {
      state.sideBarModal = true;
    },
    hideSideBarModal: (state) => {
      state.sideBarModal = false;
    },
  },
});

export const {
  showLogoutModal,
  hideLogoutModal,
  showSideBarModal,
  hideSideBarModal,
} = globalSlice.actions;

export default globalSlice.reducer;
