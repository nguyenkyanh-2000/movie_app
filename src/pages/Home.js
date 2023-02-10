import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import NavigationBar from "../components/navbar/NavigationBar";
import HomePageHeaderSection from "../components/homePage/HomePageHeaderSection";
import MovieCarousel from "../components/carousel/MovieCarousel";
import { HeaderBackground } from "../components/homePage/HeaderBackground";
import { getTrendingMovies, getUpcomingMovies } from "../data/fetchMovies";

const titleCarousel = {
  fontSize: "36px",
  fontWeight: "600",
  textAlign: "center",
  marginTop: "64px",
};

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      const trendingMoviesData = await getTrendingMovies();
      const upcomingMoviesData = await getUpcomingMovies();
      setTrendingMovies(trendingMoviesData.results);
      setUpcomingMovies(upcomingMoviesData.results);
    };
    getMoviesData();
  }, []);

  return (
    <>
      <HeaderBackground>
        <NavigationBar />
        <HomePageHeaderSection />
      </HeaderBackground>
      <Typography style={titleCarousel}>Trending</Typography>
      <MovieCarousel items={trendingMovies} />
      <Typography style={titleCarousel}>Upcoming</Typography>
      <MovieCarousel items={upcomingMovies} />
    </>
  );
}

export default Home;
