import apiMovieService from "../app/apiMovieService";
import { API_KEY, BASE_URL } from "../app/config";

export const getTrendingMovies = async () => {
  try {
    const res = await apiMovieService.get(
      `/trending/movie/week?api_key=${API_KEY}`
    );
    const data = res.data;
    return data;
  } catch (error) {}
};

export const getUpcomingMovies = async () => {
  try {
    const res = await apiMovieService.get(`/movie/upcoming?api_key=${API_KEY}`);
    const data = res.data;
    return data;
  } catch (error) {}
};

export const getPopularMovies = async () => {
  try {
    const res = await apiMovieService.get(`/movie/popular?api_key=${API_KEY}`);
    const data = res.data;
    return data;
  } catch (error) {}
};

export const getTopRatedMovies = async () => {
  try {
    const res = await apiMovieService.get(
      `/movie/top_rated?api_key=${API_KEY}`
    );
    const data = res.data;
    return data;
  } catch (error) {}
};

export const discoverMovies = async ({
  page = "",
  sortBy = "popularity.asc",
  genreIds = "",
  voteAverage_Gte = "",
  voteAverage_Lte = "",
  primaryReleaseDate_Gte = "",
  primaryReleaseDate_Lte = "",
  with_keywords = "",
}) => {
  try {
    const res = await apiMovieService.get(
      `/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=${sortBy}&with_genres=${genreIds}&vote_average.gte=${voteAverage_Gte}&vote_average.lte=${voteAverage_Lte}&primary_release_date.gte=${primaryReleaseDate_Gte}&primary_release_date.lte=${primaryReleaseDate_Lte}&with_keywords=${with_keywords}`
    );
    const data = res.data;
    console.log(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=${sortBy}&with_genres=${genreIds}&vote_average.gte=${voteAverage_Gte}&vote_average.lte=${voteAverage_Lte}&primary_release_date.gte=${primaryReleaseDate_Gte}&primary_release_date.lte=${primaryReleaseDate_Lte}&with_keywords=${with_keywords}`
    );
    return data;
  } catch (error) {}
};
