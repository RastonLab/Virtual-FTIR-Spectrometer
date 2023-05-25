import { configureStore } from "@reduxjs/toolkit";

// reducers
import backgroundDataReducer from "../features/backgroundData/backgroundDataSlice";
import errorReducer from "../features/error/errorSlice";
import parameterReducer from "../features/parameter/parameterSlice";
import progressReducer from "../features/progress/progressSlice";
import spectrumDataReducer from "../features/spectrumData/spectrumDataSlice";

export const store = configureStore({
  reducer: {
    backgroundData: backgroundDataReducer,
    error: errorReducer,
    parameter: parameterReducer,
    progress: progressReducer,
    spectrumData: spectrumDataReducer,
  },
});
