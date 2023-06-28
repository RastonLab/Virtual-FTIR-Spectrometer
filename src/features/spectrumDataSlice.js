import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spectrumData: null,
  processedWaveMin: null,
  processedWaveMax: null,
};

const spectrumDataSlice = createSlice({
  name: "spectrumData",
  initialState,
  reducers: {
    // payload is a list [object, number, number]
    //   object: x and y coordinates
    //   number: waveMin
    //   number: waveMax
    setSpectrumData: (state, { payload }) => {
      state.spectrumData = payload[0];
      state.processedWaveMin = payload[1];
      state.processedWaveMax = payload[2];
    },
  },
});

export const { setSpectrumData } = spectrumDataSlice.actions;

export default spectrumDataSlice.reducer;
