import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundData: null,
  backgroundWaveMin: null,
  backgroundWaveMax: null,
};

const backgroundDataSlice = createSlice({
  name: "backgroundData",
  initialState,
  reducers: {
    setBackgroundData: (state, { payload }) => {
      state.backgroundData = payload;
    },

    // payload is a list [number, number]
    //   number: waveMin
    //   number: waveMax
    setBackgroundWave: (state, { payload }) => {
      state.backgroundWaveMin = payload[0];
      state.backgroundWaveMax = payload[1];
    },
  },
});

export const { setBackgroundData, setBackgroundWave } =
  backgroundDataSlice.actions;

export default backgroundDataSlice.reducer;
