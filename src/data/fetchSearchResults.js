import apiMovieService from "../app/apiMovieService";
import { API_KEY } from "../app/config";

export const searchMovies = async (searchQuery, page = 1) => {
  try {
    const res = await apiMovieService.get(
      `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    return [];
  }
};
