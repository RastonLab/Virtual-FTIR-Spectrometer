import { createSlice } from "@reduxjs/toolkit";

// constants
import { PARAMETER_VALUE } from "../dictionaries/constants";

const initialState = {
  beamsplitter: PARAMETER_VALUE.beamsplitterCaF2,
  detector: PARAMETER_VALUE.detectorInSb,
  medium: PARAMETER_VALUE.mediumVacuum,
  molecule: "HCN",
  pressure: 1,
  resolution: 0.125,
  scan: 64,
  source: PARAMETER_VALUE.sourceGlobar,
  waveMin: 1700,
  waveMinSaved: null,
  waveMax: 7000,
  waveMaxSaved: null,
  window: PARAMETER_VALUE.cellWindowCaF2,
  zeroFill: 1,
};

/**
 * Redux Toolkit slice for setting user input parameters
 */
const parameterSlice = createSlice({
  name: "parameter",
  initialState,
  reducers: {
    setBeamsplitter: (state, { payload }) => {
      state.beamsplitter = payload;
    },
    setDetector: (state, { payload }) => {
      state.detector = payload;
    },
    setMedium: (state, { payload }) => {
      state.medium = payload;
    },
    setMolecule: (state, { payload }) => {
      state.molecule = payload;
    },
    setPressure: (state, { payload }) => {
      state.pressure = payload;
    },
    setResolution: (state, { payload }) => {
      state.resolution = payload;
    },
    setScan: (state, { payload }) => {
      state.scan = payload;
    },
    setSource: (state, { payload }) => {
      state.source = payload;
    },
    setWaveMin: (state, { payload }) => {
      state.waveMin = payload;
    },
    setWaveMax: (state, { payload }) => {
      state.waveMax = payload;
    },
    setWaveSaved: (state, { payload }) => {
      state.waveMinSaved = payload[0];
      state.waveMaxSaved = payload[1];
    },
    setWindow: (state, { payload }) => {
      state.window = payload;
    },
    setZeroFill: (state, { payload }) => {
      state.zeroFill = payload;
    },
  },
});

export const {
  setBeamsplitter,
  setDetector,
  setMedium,
  setMolecule,
  setPressure,
  setResolution,
  setScan,
  setSource,
  setWaveMin,
  setWaveMax,
  setWaveSaved,
  setWindow,
  setZeroFill,
} = parameterSlice.actions;

export default parameterSlice.reducer;
