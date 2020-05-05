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
        if (handyMen.length !== 1) throw new Error("Course not found: " + id);
        return handyMen[0];
      });
    })
    .catch(handleError);
}
