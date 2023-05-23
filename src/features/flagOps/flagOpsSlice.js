import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noData: -1,
  processed: 0,
  background: 1,
};

const flagOpsSlice = createSlice({
  name: "flagOps",
  initialState,
  reducers: {
    updateNoData: (state, { payload }) => {
      state.noData = payload;
    },
    updateProcessed: (state, { payload }) => {
      state.processed = payload;
    },
    updateBackground: (state, { payload }) => {
      state.background = payload;
    },
  },
});

export const { updateNoData } = flagOpsSlice.actions;

export default flagOpsSlice.reducer;
