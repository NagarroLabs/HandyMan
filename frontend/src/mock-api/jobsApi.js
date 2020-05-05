import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/jobs/";

export function getJobs() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getJobById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((jobs) => {
        if (jobs.length !== 1) throw new Error("Course not found: " + id);
        return jobs[0];
      });
    })
    .catch(handleError);
}
