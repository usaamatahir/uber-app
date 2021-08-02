import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: reducer,
  },
});
