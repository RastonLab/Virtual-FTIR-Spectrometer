import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  absorbanceData: null,
  absorbanceWaveMin: null,
  absorbanceWaveMax: null,
};

/**
 * Redux Toolkit slice for setting absorbance spectrum related data
 */
const absorbanceDataSlice = createSlice({
  name: "absorbanceData",
  initialState,
  reducers: {
    // payload is a list [object, number, number]
    //   object: x and y coordinates
    //   number: waveMin
    //   number: waveMax
    setAbsorbanceData: (state, { payload }) => {
      state.absorbanceData = payload[0];
      state.absorbanceWaveMin = payload[1];
      state.absorbanceWaveMax = payload[2];
    },
  },
});

export const { setAbsorbanceData } = absorbanceDataSlice.actions;

export default absorbanceDataSlice.reducer;
