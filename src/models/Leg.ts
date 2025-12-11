import type { Place } from "./Place";

export type Leg = {
  duration: number;
  origin: Place;
  destination: Place;
};
