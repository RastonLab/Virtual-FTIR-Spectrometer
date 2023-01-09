import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Action } from "./actions";

export const FlagOps = {
  NoData: -1,
  Processed: 0,
  Background: 1
}

const initialState = {
  params: {
    minWave: 1900,
    maxWave: 2300,
    molecule: "CO",
    pressure: 0.001,
    resolution: 1,
    numScan: 1,
    zeroFill: 0,
    source: 3100,
    beamsplitter: "AR_ZnSe",
    cellWindow: "CaF2",
    detector: "MCT",
  },

  spectrumData: null,

  backgroundData: null,

  progress: false,

  error: {
    active: false,
    text: "",
  },

  lastGenerated: FlagOps.NoData,
};

function reducer(state, action) {
  switch (action.type) {
    // ---------- experimental setup parameters ----------
    case Action.StoreParams:
      return {
        ...state,
        params: action.payload,
      };

    // ---------- store processed spectrum data ----------
    case Action.StoreSpectrumData:
      return {
        ...state,
        spectrumData: action.payload,
      };

    // ---------- store background sample data ----------
    case Action.StoreBackgroundData:
      return {
        ...state,
        backgroundData: action.payload,
      };

    // ---------- spinning progress wheel ----------
    case Action.SetProgress:
      return {
        ...state,
        progress: action.payload,
      };

    // ----------  error text ----------
    case Action.SetError:
      return {
        ...state,
        error: action.payload,
      };
    case Action.SetFlag:
      return {
        ...state,
        lastGenerated: action.payload
      };
    default:
      return state;
  }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
