import { configureStore } from "@reduxjs/toolkit";

// reducers
import absorbanceDataReducer from "../features/absorbanceDataSlice";
import backgroundDataReducer from "../features/backgroundDataSlice";
import errorReducer from "../features/errorSlice";
import parameterReducer from "../features/parameterSlice";
import peaksDataReducer from "../features/peaksDataSlice";
import progressReducer from "../features/progressSlice";
import sampleDataReducer from "../features/sampleDataSlice";
import spinnerReducer from "../features/spinnerSlice";
import timerReducer from "../features/timerSlice";

export const store = configureStore({
  reducer: {
    absorbanceData: absorbanceDataReducer,
    backgroundData: backgroundDataReducer,
    error: errorReducer,
    parameter: parameterReducer,
    peaksData: peaksDataReducer,
    progress: progressReducer,      // For when we are simulating scans
    sampleData: sampleDataReducer,
    spinner: spinnerReducer,        // For when we are reaching out to the server
    timer: timerReducer             // For keeping track of how long the instrument window spiner has been running
  },
});
