import type { Place } from "./Place";

export type Leg = {
  duration: number;
  origin: Place;
  destination: Place;
  transportation?: {
    id: string;
    name: string;
    number?: string;
    product: {
      id: number;
      class: number;
      name: string;
      iconId?: number;
    };
  };
};
