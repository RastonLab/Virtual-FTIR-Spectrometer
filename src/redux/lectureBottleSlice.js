import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lectureBottleInUse: true,
};

const lectureBottleSlice = createSlice({
  name: "lectureBottle",
  initialState,
  reducers: {
    setDevMode: (state, { payload }) => {
      state.lectureBottleInUse = payload;
    },
  },
});

export const { setDevMode } = lectureBottleSlice.actions;

export default lectureBottleSlice.reducer;