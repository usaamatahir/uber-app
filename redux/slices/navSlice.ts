import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  origin: string | null;
  travelTimeInformation: string | null;
  destination: string | null;
};

const initialState: initialStateType = {
  origin: null,
  travelTimeInformation: null,
  destination: null,
};

export const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    setOrigin: (state, { payload }) => {
      state.origin = payload;
    },
    setDestination: (state, { payload }) => {
      state.destination = payload;
    },
    setTravelTimeInformation: (state, { payload }) => {
      state.travelTimeInformation = payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export default navSlice.reducer;
