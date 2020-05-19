import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/reviews/";

export function getReviews() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getReviewById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((reviews) => {
        if (reviews.length !== 1) throw new Error("Review not found: " + id);
        return reviews[0];
      });
    })
    .catch(handleError);
}

export function addReview(review) {
  return fetch(baseUrl + (review.id || ""), {
    method: review.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...review,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteReview(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
