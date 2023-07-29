import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setBackgroundData } = backgroundDataSlice.actions;

export default backgroundDataSlice.reducer;
