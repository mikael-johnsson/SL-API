import type { Journey } from "./journey";

export const testObject = () => {
  const trip: Journey = {
    tripDuration: 300,
    legs: [
      {
        duration: 22,
        origin: {
          id: "234242",
          name: "Hägerstensåsen, Stockholm",
          type: "platform",
          disassembledName: "Hägerstensåsen",
          coord: [55.232323, 18.343434],
          parent: {
            id: "234242",
            name: "Hägerstensåsen, Stockholm",
            type: "stop",
            parent: {
              id: "234242",
              name: "Hägerstensåsen, Stockholm",
              type: "locality",
            },
          },
          departureTimePlanned: "2025-04-04T10:42:42Z",
        },
        destination: {
          id: "234242",
          name: "Slussen, Stockholm",
          type: "platform",
          disassembledName: "Slussen",
          coord: [54.232323, 16.343434],
          parent: {
            id: "234242",
            name: "Slussen, Stockholm",
            type: "stop",
            parent: {
              id: "234242",
              name: "Hägerstensåsen, Stockholm",
              type: "locality",
            },
          },
          arrivalTimePlanned: "2025-04-04T10:44:12Z",
        },
      },
    ],
  };

  console.log("this is the test object:", trip);
};

export const testingAPIMicke = async () => {
  const response = await fetch(
    "https://journeyplanner.integration.sl.se/v2/trips?type_origin=any&type_destination=any&name_origin=9091001000009182&name_destination=9091001000009192&calc_number_of_trips=1"
  );
  const data = await response.json();
  console.log(data);
};
