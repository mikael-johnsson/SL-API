export type Place = {
  id: string;
  name: string;
  disassembledName?: string;
  type: "platform" | "stop" | "locality";
  coord?: number[];
  parent?: Place;
  departureTimePlanned?: string;
  arrivalTimePlanned?: string;
};
