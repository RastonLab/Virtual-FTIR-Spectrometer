import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  absorbanceData: null,
};

const absorbanceDataSlice = createSlice({
  name: "absorbanceData",
  initialState,
  reducers: {
    updateAbsorbanceData: (state, { payload }) => {
      state.absorbanceData = payload;
    },
  },
});

export const { updateAbsorbanceData } = absorbanceDataSlice.actions;

export default absorbanceDataSlice.reducer;
