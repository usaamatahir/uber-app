import { configureStore } from "@reduxjs/toolkit";
import navreducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navreducer,
  },
});

export type RootStateType = ReturnType<typeof navreducer>;
