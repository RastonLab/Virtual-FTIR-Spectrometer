import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peaksData: null,
};

const peaksDataSlice = createSlice({
  name: "peaksData",
  initialState,
  reducers: {
    updatePeaksData: (state, { payload }) => {
      state.peaksData = payload;
    },
  },
});

export const { updatePeaksData } = peaksDataSlice.actions;

export default peaksDataSlice.reducer;
