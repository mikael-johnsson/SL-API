export const getGeoLocation = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log("this is users position: ", pos.coords);
  });
};
