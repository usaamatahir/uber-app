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

export type initialStateType = {
  origin: originType;
  travelTimeInformation: string | null;
  destination: destinationType;
};

export type stateType = {
  nav: initialStateType;
};
