import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logoutModal: false,
  sideBarModal: false,
  userOption: false,
  userId: ''
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
    toggleUserOption: (state) => {
      state.userOption = !state.userOption;
    },
    hideUserOption: (state) => {
      state.userOption = false;
    },
    setUserId: (state, { payload }) => {
      state.userId = payload;
    }
  },
});

export const {
  showLogoutModal,
  hideLogoutModal,
  showSideBarModal,
  hideSideBarModal,
  toggleUserOption,
  hideUserOption,
  setUserId
} = globalSlice.actions;

export default globalSlice.reducer;
