import { API_KEY } from "../app/config";
import apiMovieService from "../app/apiMovieService";

export const getMovieById = async (movieId) => {
  const res = await apiMovieService.get(`/movie/${movieId}?api_key=${API_KEY}`);
  const data = res.data;
  console.log(data);
};
