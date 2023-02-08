import axios from "axios";
import { BASE_URL } from "../../src/app/config.js";

const apiMovieService = axios.create({
  baseURL: BASE_URL,
});

apiMovieService.interceptors.request.use(
  (request) => {
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiMovieService.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default apiMovieService;
