import { createSlice } from "@reduxjs/toolkit";

const calory = createSlice({
  name: "calories",
  initialState: [],
  reducers: {
    addCal: (state, action) => {
      // const newCal = action.payload;
      state.push(action.payload);
    },
  },
});

const { reducer, actions } = calory;
export const { addCal } = actions;
export default reducer;
