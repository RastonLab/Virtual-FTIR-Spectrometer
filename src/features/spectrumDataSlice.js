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
    setSpectrumData: (state, { payload }) => {
      state.spectrumData = payload;
    },

    // payload is a list [number, number]
    //   number: waveMin
    //   number: waveMax
    setProcessedWave: (state, { payload }) => {
      state.processedWaveMin = payload[0];
      state.processedWaveMax = payload[1];
    },
  },
});

export const { setSpectrumData, setProcessedWave } = spectrumDataSlice.actions;

export default spectrumDataSlice.reducer;
