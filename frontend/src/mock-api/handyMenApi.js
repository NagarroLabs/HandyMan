import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/handyMen/";

export function getHandyMen() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getHandyManById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((handyMen) => {
        if (handyMen.length !== 1) throw new Error("Handy Man not found: " + id);
        return handyMen[0];
      });
    })
    .catch(handleError);
}

export function addHandyMan(handyMan) {
  return fetch(baseUrl + (handyMan.id || ""), {
    method: handyMan.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...handyMan,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteHandyMan(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
