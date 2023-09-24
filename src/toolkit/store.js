import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
