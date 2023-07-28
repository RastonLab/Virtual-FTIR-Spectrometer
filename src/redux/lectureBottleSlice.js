import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lectureBottleInUse: true,
};

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
