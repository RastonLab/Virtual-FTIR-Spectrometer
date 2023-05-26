import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beamsplitter: "AR_ZnSe",
  detector: "MCT",
  medium: "Vacuum",
  molecule: "CO",
  pressure: 0.001,
  resolution: 1,
  scan: 1,
  source: 3100,
  waveMin: 1900,
  waveMinSaved: null,
  waveMax: 2300,
  waveMaxSaved: null,
  window: "CaF2",
  zeroFill: 0,
};

const parameterSlice = createSlice({
  name: "parameter",
  initialState,
  reducers: {
    updateBeamsplitter: (state, { payload }) => {
      state.beamsplitter = payload;
    },
    updateDetector: (state, { payload }) => {
      state.detector = payload;
    },
    updateMedium: (state, { payload }) => {
      state.medium = payload;
    },
    updateMolecule: (state, { payload }) => {
      state.molecule = payload;
    },
    updatePressure: (state, { payload }) => {
      state.pressure = payload;
    },
    updateResolution: (state, { payload }) => {
      state.resolution = payload;
    },
    updateScan: (state, { payload }) => {
      state.scan = payload;
    },
    updateSource: (state, { payload }) => {
      state.source = payload;
    },
    updateWaveMin: (state, { payload }) => {
      state.waveMin = payload;
    },
    updateWaveMinSaved: (state, { payload }) => {
      state.waveMinSaved = payload;
    },
    updateWaveMax: (state, { payload }) => {
      state.waveMax = payload;
    },
    updateWaveMaxSaved: (state, { payload }) => {
      state.waveMaxSaved = payload;
    },
    updateWindow: (state, { payload }) => {
      state.window = payload;
    },
    updateZeroFill: (state, { payload }) => {
      state.zeroFill = payload;
    },
  },
});

export const {
  updateBeamsplitter,
  updateDetector,
  updateMedium,
  updateMolecule,
  updatePressure,
  updateResolution,
  updateScan,
  updateSource,
  updateWaveMin,
  updateWaveMinSaved,
  updateWaveMax,
  updateWaveMaxSaved,
  updateWindow,
  updateZeroFill,
} = parameterSlice.actions;

export default parameterSlice.reducer;
