import { configureStore } from "@reduxjs/toolkit";

// reducers
import backgroundDataReducer from "../features/backgroundDataSlice";
import errorReducer from "../features/errorSlice";
import parameterReducer from "../features/parameterSlice";
import progressReducer from "../features/progressSlice";
import spectrumDataReducer from "../features/spectrumDataSlice";

export const store = configureStore({
  reducer: {
    backgroundData: backgroundDataReducer,
    error: errorReducer,
    parameter: parameterReducer,
    progress: progressReducer,
    spectrumData: spectrumDataReducer,
  },
});
