import apiMovieService from "../app/apiMovieService";
import { API_KEY } from "../app/config";

export const searchKeywords = async (searchQuery) => {
  try {
    const res = await apiMovieService.get(
      `/search/keyword?api_key=${API_KEY}&query=${searchQuery}&page=1`
    );
    const data = res.data;
    return data;
  } catch (error) {
    return [];
  }
};
