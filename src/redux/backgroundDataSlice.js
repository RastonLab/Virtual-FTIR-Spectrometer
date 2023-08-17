import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundParameters: null,
  backgroundData: null,
  backgroundWaveMin: null,
  backgroundWaveMax: null,
};

/**
 * Redux Toolkit slice for setting background spectrum related data
 */
const backgroundDataSlice = createSlice({
  name: "backgroundData",
  initialState,
  reducers: {
    // payload is a list [object, number, number]
    //   object: x and y coordinates
    //   number: waveMin
    //   number: waveMax
    setBackgroundData: (state, { payload }) => {
      state.backgroundData = payload[0];
      state.backgroundWaveMin = payload[1];
      state.backgroundWaveMax = payload[2];
    },

    setBackgroundParameters: (state, { payload }) => {
      state.backgroundParameters = payload
    },
  },
});

export const { setBackgroundData, setBackgroundParameters } = backgroundDataSlice.actions;

export default backgroundDataSlice.reducer;
