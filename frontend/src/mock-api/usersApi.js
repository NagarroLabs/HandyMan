import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/users/";

export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getUserById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((users) => {
        if (users.length !== 1) throw new Error("Course not found: " + id);
        return users[0];
      });
    })
    .catch(handleError);
}
