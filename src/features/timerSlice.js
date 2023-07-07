import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    // payload is a count up of the time a scan is taking
    setTimer: (state, { payload }) => {
      state.timer = payload;
    },
  },
});

export const { setTimer } = timerSlice.actions;

export default timerSlice.reducer;
