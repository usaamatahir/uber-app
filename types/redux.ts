export type originType = {
  location: {
    lat: number;
    lng: number;
  };
  description: string;
};
export type destinationType = {
  location: {
    lat: number;
    lng: number;
  };
  description: string;
};
export type timeTravelType = {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
};

export type initialStateType = {
  origin: originType;
  travelTimeInformation: timeTravelType;
  destination: destinationType;
};

export type stateType = {
  nav: initialStateType;
};

export type RideDataType = {
  id: string;
  name: string;
  multiplier: number;
  image: string;
};
