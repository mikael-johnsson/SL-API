import type { Leg } from "./Leg";

export type Journey = {
  tripDuration: number;
  legs: Leg[];
};
