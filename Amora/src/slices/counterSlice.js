import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increament(state, action) {
      state.count += 1;
    },

    decreament(state, action) {
      state.count -= 1;
    },
    incByAmount(state, action) {
      state.count += action.payload;
    },
  },
});

export const { increament, decreament, incByAmount } = counterSlice.actions;
export default counterSlice.reducer