import { configureStore } from "@reduxjs/toolkit";

// reducers
import absorbanceDataReducer from "../redux/absorbanceDataSlice";
import backgroundDataReducer from "../redux/backgroundDataSlice";
import errorReducer from "../redux/errorSlice";
import parameterReducer from "../redux/parameterSlice";
import peaksDataReducer from "../redux/peaksDataSlice";
import progressReducer from "../redux/progressSlice";
import sampleDataReducer from "../redux/sampleDataSlice";
import spinnerReducer from "../redux/spinnerSlice";
import timerReducer from "../redux/timerSlice";

import devModeReducer from "../redux/devModeSlice";
import lectureBottleReducer from "./lectureBottleSlice";

export const store = configureStore({
  reducer: {
    absorbanceData: absorbanceDataReducer,
    backgroundData: backgroundDataReducer,
    error: errorReducer,
    lectureBottle: lectureBottleReducer,
    parameter: parameterReducer,
    peaksData: peaksDataReducer,
    progress: progressReducer, // For when we are simulating scans
    sampleData: sampleDataReducer,
    spinner: spinnerReducer, // For when we are reaching out to the server
    timer: timerReducer, // For keeping track of how long the instrument window spiner has been running
    devMode: devModeReducer,
  },
});
