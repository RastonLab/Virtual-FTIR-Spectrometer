import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sampleData: null,
  sampleWaveMin: null,
  sampleWaveMax: null,
};

/**
 * Redux Toolkit slice for setting sample spectrum related data
 */
const sampleDataSlice = createSlice({
  name: "sampleData",
  initialState,
  reducers: {
    // payload is a list [object, number, number]
    //   object: x and y coordinates
    //   number: waveMin
    //   number: waveMax
    setSampleData: (state, { payload }) => {
      state.sampleData = payload[0];
      state.sampleWaveMin = payload[1];
      state.sampleWaveMax = payload[2];
    },
  },
});

export const { setSampleData } = sampleDataSlice.actions;

export default sampleDataSlice.reducer;
