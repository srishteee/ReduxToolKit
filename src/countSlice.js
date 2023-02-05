import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    addCount: (state, action) => {
      state.value(action.payload);
    },
    clearCount: (state) => {
      state.value = 0;
    },
  },
});
export const { addCount, clearCount } = countSlice.actions; // export the action function

export default countSlice.reducer; //export reducer here
