import { MockAPIDataType } from "../../../interfaces/mockapi.interface";
import { createSlice } from "@reduxjs/toolkit";

type DataTypeArray = {
  data: Array<MockAPIDataType>;
};

const initialState: DataTypeArray = {
  data: [],
};

const userDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getUserData: (state, { payload }) => {
      state.data = [...state.data, ...payload];
    },
    resetUserData: (state) => {
      state.data = [];
    },
  },
});

export const { getUserData, resetUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
