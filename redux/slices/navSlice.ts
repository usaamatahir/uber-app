import { createSlice } from "@reduxjs/toolkit";
import {
  destinationType,
  initialStateType,
  originType,
  stateType,
} from "../../types/redux";

const initialOrigin: originType = {
  location: {
    lat: 37.78825,
    lng: -122.4324,
  },
  description: "",
};

const initialDestination: originType = {
  location: {
    lat: 0,
    lng: 0,
  },
  description: "",
};

const initialState: initialStateType = {
  origin: initialOrigin,
  travelTimeInformation: null,
  destination: initialDestination,
};

export const navSlice = createSlice({
  name: "nav",
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

export const selectOrigin = (state: stateType) => state.nav.origin;

export const selectDestination = (state: stateType) => state.nav.destination;

export const selectTravelTimeInformation = (state: stateType) => {
  state.nav.travelTimeInformation;
};

export default navSlice.reducer;
