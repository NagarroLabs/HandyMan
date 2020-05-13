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

export function addUser(user) {
  return fetch(baseUrl + (user.id || ""), {
    method: user.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...user,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUser(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
