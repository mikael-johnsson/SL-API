const findGeoPostion = async (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const getGeoposition = async () => {
  try {
    const pos = await findGeoPostion();
    return pos.coords;
  } catch (error) {
    const geoError = error as GeolocationPositionError;
    console.log(geoError.message);
    //här bör felmeddelande skapas för user
  }
};
