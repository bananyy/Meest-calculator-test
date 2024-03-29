const BASE_URL = "https://65f9e7303909a9a65b199efe.mockapi.io";

export async function fetchJson(url, options) {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  if (response.status !== 200) {
    throw new Error("Error response from server");
  }
  return await response.json();
}

export async function postJson(url, payload) {
  return fetchJson(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
