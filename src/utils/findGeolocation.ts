const findGePostion = async (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const getGeoposition = async () => {
  const pos = await findGePostion();
  return pos.coords;
};
