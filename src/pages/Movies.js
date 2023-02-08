import React, { useState, useEffect } from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import { Stack } from "@mui/system";
import FilterSection from "../components/moviesPage/filterForm/FilterSection";
import MoviesDashboard from "../components/moviesPage/MoviesDashboard";
import { discoverMovies } from "../data/fetchMovies";

const contentStyle = (theme) => ({
  padding: "30px 18px",
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
});

function Movies() {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    sortBy: "popularity.desc",
    genres: [],
    votingAverage: [0, 10],
    primary_release_date: { gte: "", lte: "" },
    keywords: [],
  });

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const moviesData = await discoverMovies({
          page: page,
          sortBy: formData.sortBy,
          genreIds: formData.genres,
          voteAverage_Gte: formData.votingAverage[0],
          voteAverage_Lte: formData.votingAverage[1],
          primaryReleaseDate_Gte: formData.primary_release_date.gte,
          primaryReleaseDate_Lte: formData.primary_release_date.lte,
          with_keywords: [...formData.keywords]
            .map((keyword) => keyword.id)
            .join(","),
        });
        setMovies(moviesData.results);
        setTotalPages(moviesData.total_pages);
      } catch (error) {
        console.log("error at getMoviesData");
      }
    };
    getMoviesData();
  }, [formData, page]);

  return (
    <>
      <NavigationBar bgColor={(theme) => theme.palette.gray.dark5} />
      <Stack sx={contentStyle}>
        <FilterSection setFormData={setFormData}></FilterSection>
        <MoviesDashboard
          movies={movies}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        ></MoviesDashboard>
      </Stack>
    </>
  );
}

export default Movies;
