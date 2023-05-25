import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spectrumData: null,
};

const spectrumDataSlice = createSlice({
  name: "spectrumData",
  initialState,
  reducers: {
    updateSpectrumData: (state, { payload }) => {
      state.spectrumData = payload;
    },
  },
});

export const { updateSpectrumData } = spectrumDataSlice.actions;

export default spectrumDataSlice.reducer;
