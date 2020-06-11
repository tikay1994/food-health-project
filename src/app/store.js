import { configureStore } from "@reduxjs/toolkit";
import caloryReducer from "../Components/User/CalorySlice";

const rootReducer = {
  calories: caloryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
