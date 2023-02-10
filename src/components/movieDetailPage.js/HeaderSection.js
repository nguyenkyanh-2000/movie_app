import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { BASE_IMAGE_URL } from "../../app/config";
import { CastList } from "./CastList";
import { getCastById } from "../../data/fetchSingleMovie";

function HeaderSection({ movieData }) {
  const [castData, setCastData] = useState([]);
  useEffect(() => {
    const getCastData = async () => {
      const data = await getCastById(movieData.id);
      setCastData(data.cast);
      try {
      } catch (error) {
        console.log("error at getCastData");
      }
    };
    getCastData();
  }, [movieData.id]);

  return (
    <>
      <Stack
        alignItems={"center"}
        justifyItems={"center"}
        marginTop={"64px"}
        sx={{
          backgroundImage: `url(${BASE_IMAGE_URL}/original/${movieData.backdrop_path})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "300px",
            maxHeight: "450px",
            filter: "brightness(100%)",
          }}
        >
          <img
            src={`${BASE_IMAGE_URL}/original${movieData.poster_path}`}
            alt=""
            width="100%"
            height="100%"
          ></img>
        </Box>
      </Stack>
      <Stack
        padding={3}
        direction="column"
        alignItems={"center"}
        marginTop={7}
        spacing={2}
      >
        <Typography variant="h4" fontWeight={700}>
          {movieData.original_title}
        </Typography>
        <Typography> Release Date: {movieData.release_date}</Typography>
        <Typography>
          Genres: {movieData.genres?.map((genre) => genre.name).join(", ")}
        </Typography>
        <Typography> Description : {movieData.overview}</Typography>
        <Typography variant="h4" fontWeight={700}>
          Cast
        </Typography>
        <CastList castData={castData}></CastList>
      </Stack>
    </>
  );
}

export default HeaderSection;
