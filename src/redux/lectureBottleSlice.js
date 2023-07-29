import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lectureBottleInUse: true,
};

/**
 * Redux Toolkit slice for toggling if the spectrum collection is a sample. Used to determine state of the lecture bottle valve.
 */
const lectureBottleSlice = createSlice({
  name: "lectureBottle",
  initialState,
  reducers: {
    setLectureBottle: (state, { payload }) => {
      state.lectureBottleInUse = payload;
    },
  },
});

export const { setLectureBottle } = lectureBottleSlice.actions;

export default lectureBottleSlice.reducer;
