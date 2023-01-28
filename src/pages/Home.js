import React from "react";
import { Box, Typography } from "@mui/material";
import NavigationBar from "../components/navbar/NavigationBar";
import HomePageHeaderSection from "../components/HomePageHeaderSection";
import MovieCarousel from "../components/carousel/MovieCarousel";

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    image: "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    image: "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
  },
];

const headerStyle = (theme) => ({
  position: "relative",
  height: "fit-content",
  padding: "0px 0px 40px 0px",
  background: `linear-gradient(-45deg, ${theme.palette.thematic.black}, ${theme.palette.thematic.green}, ${theme.palette.thematic.yellow}, ${theme.palette.thematic.blue})`,
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",

  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
});

function Home() {
  return (
    <>
      <Box sx={headerStyle}>
        <NavigationBar />
        <HomePageHeaderSection />
      </Box>
      <Typography
        variant="h4"
        fontWeight={"600"}
        textAlign="center"
        marginY={"64px"}
      >
        Trending
      </Typography>
      <MovieCarousel items={items} />
      <Typography
        variant="h4"
        fontWeight={"600"}
        textAlign="center"
        marginY={"64px"}
      >
        Upcoming
      </Typography>
      <MovieCarousel items={items} />
    </>
  );
}

export default Home;
