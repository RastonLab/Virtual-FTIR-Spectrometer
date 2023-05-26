import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundData: null,
};

const backgroundDataSlice = createSlice({
  name: "backgroundData",
  initialState,
  reducers: {
    updateBackgroundData: (state, { payload }) => {
      state.backgroundData = payload;
    },
  },
});

export const { updateBackgroundData } = backgroundDataSlice.actions;

export default backgroundDataSlice.reducer;
