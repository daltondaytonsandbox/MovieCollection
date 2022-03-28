import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getMovies(perPage, page) {
    return apiClient.get("/movies?_limit=" + perPage + "&_page=" + page);
  },
  getMovie(id) {
    return apiClient.get("/movies/" + id);
  },
  postMovie(movie) {
    return apiClient.post("/movies", movie);
  },
};
