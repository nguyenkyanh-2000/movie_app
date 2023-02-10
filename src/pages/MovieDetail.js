import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderSection from "../components/movieDetailPage.js/HeaderSection";
import NavigationBar from "../components/navbar/NavigationBar";
import { getMovieById } from "../data/fetchSingleMovie";

function MovieDetail() {
  const [movieData, setMovieData] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    const getMovieData = async (id) => {
      try {
        const movieData = await getMovieById(id);
        setMovieData(movieData);
      } catch (error) {
        console.log("getMovieData");
      }
    };
    getMovieData(movieId.id);
  }, [movieId]);

  return (
    <>
      <NavigationBar bgColor={(theme) => theme.palette.gray.dark5} />
      <HeaderSection movieData={movieData}> </HeaderSection>
    </>
  );
}

export default MovieDetail;
