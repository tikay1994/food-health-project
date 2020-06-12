import { createSlice } from "@reduxjs/toolkit";
const initialCals = [
  {
    id: 91176,
    count: 2,
    unit: "kg",
    title: "Chicken",
  },
];

const calory = createSlice({
  name: "calories",
  initialState: initialCals,
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
