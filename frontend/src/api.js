const BASE_URL = "https://65f9e7303909a9a65b199efe.mockapi.io";

export async function fetchJson(url) {
  const response = await fetch(`${BASE_URL}/${url}`);
  return await response.json();
}
