/**
 *
 * @param url the url to the API endpoint
 * @returns the API response
 */
export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Kunde inte hämta data från API. Status: ${response.status}`
    );
  }

  const data: T = await response.json();
  return data;
};
