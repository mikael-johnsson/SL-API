import type { Leg } from "./leg";

export type Journey = {
  tripDuration: number;
  legs: Leg[];
};
