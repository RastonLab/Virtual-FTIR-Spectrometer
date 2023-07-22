import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peaksData: null,
};

const peaksDataSlice = createSlice({
  name: "peaksData",
  initialState,
  reducers: {
    setPeaksData: (state, { payload }) => {
      state.peaksData = payload;
    },
  },
});

export const { setPeaksData } = peaksDataSlice.actions;

export default peaksDataSlice.reducer;
