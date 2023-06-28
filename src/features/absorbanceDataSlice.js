import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  absorbanceData: null,
};

const absorbanceDataSlice = createSlice({
  name: "absorbanceData",
  initialState,
  reducers: {
    setAbsorbanceData: (state, { payload }) => {
      state.absorbanceData = payload;
    },
  },
});

export const { setAbsorbanceData } = absorbanceDataSlice.actions;

export default absorbanceDataSlice.reducer;
