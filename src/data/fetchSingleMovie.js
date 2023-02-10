import { API_KEY } from "../app/config";
import apiMovieService from "../app/apiMovieService";

export const getMovieById = async (movieId) => {
  try {
    const res = await apiMovieService.get(
      `/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error at getMovieById");
  }
};

export const getCastById = async (movieId) => {
  try {
    const res = await apiMovieService.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error at getCastById");
  }
};
