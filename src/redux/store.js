import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Action } from "./actions";

const initialState = {
  params: {
    species: [{ molecule: "CO", mole_fraction: 1 }],
    min_wavenumber_range: 1900,
    max_wavenumber_range: 2300,
    tgas: 294.15,
    tvib: null,
    trot: null,
    pressure: 0.0001,
    path_length: 10,
    simulate_slit: false,
    mode: "transmittance_noslit",
    database: "hitran",
    resolution: "1",
    scan_num: "1",
    beamsplitter: "AR_ZnSe",
    cell_window: "CaF2",
    detector: "InSb",
    source: "Globar",
    zero_filling: "0",
  },

  // params: {
  //   min_wave: 1900,
  //   max_wave: 2300,
  //   molecule: "CO",
  //   pressure: 1,
  //   resolution: 1,
  //   num_scan: 1,
  //   zero_fill: 0,
  //   source: "Tungsten",
  //   beamsplitter: "AR_ZnSe",
  //   cell_window: "ZnSe",
  //   detector: "InSb",
  // },

  params2: {
    minWave: 1900,
    maxWave: 2300,
    molecule: "CO",
    pressure: 0.001,
    resolution: 1,
    numScan: 1,
    zeroFill: 0,
    source: "Tungsten",
    beamsplitter: "AR_ZnSe",
    cellWindow: "CaF2",
    detector: "MCT",
  },

  data: null,

  isProgressing: false,

  isError: false,
};

function reducer(state, action) {
  switch (action.type) {
    // ---------- calc_spectrum parameters ----------
    case Action.StoreParams:
      return {
        ...state,
        params2: action.payload,
      };

    // ---------- graph data (Plotly) ----------
    case Action.StoreData:
      return {
        ...state,
        data: action.payload,
      };

    // ---------- show spinning progress wheel ----------
    case Action.ShowProgress:
      return {
        ...state,
        isProgressing: true,
      };

    // ---------- hide spinning progress wheel ----------
    case Action.HideProgress:
      return {
        ...state,
        isProgressing: false,
      };

    // ---------- show error text ----------
    case Action.ShowError:
      return {
        ...state,
        isError: true,
      };

    // ---------- hide error text ----------
    case Action.HideError:
      return {
        ...state,
        isError: false,
      };

    default:
      return state;
  }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
