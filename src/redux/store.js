import { configureStore } from "@reduxjs/toolkit";

// reducers
import backgroundDataReducer from "../features/backgroundData/backgroundDataSlice";
import errorReducer from "../features/error/errorSlice";
import flagOpsReducer from "../features/flagOps/flagOpsSlice";
import parameterReducer from "../features/parameter/parameterSlice";
import progressReducer from "../features/progress/progressSlice";
import spectrumDataReducer from "../features/spectrumData/spectrumDataSlice";

export const store = configureStore({
  reducer: {
    backgroundData: backgroundDataReducer,
    error: errorReducer,
    flagOps: flagOpsReducer,
    parameter: parameterReducer,
    progress: progressReducer,
    spectrumData: spectrumDataReducer,
  },
});
