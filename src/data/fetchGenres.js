import apiMovieService from "../app/apiMovieService";
import { API_KEY } from "../app/config";

export const getGenres = async () => {
  try {
    const res = await apiMovieService.get(
      `/genre/movie/list?api_key=${API_KEY}`
    );
    const data = res.data.genres;
    return data;
  } catch (error) {
    console.log("Error at getGenres");
  }
};
