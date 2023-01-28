import React, { useState } from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import { Stack } from "@mui/system";
import MovieFilter from "../components/MovieFilter";
import MoviesDashboard from "../components/MoviesDashboard";
import { Typography } from "@mui/material";

const contentStyle = {
  padding: "30px 40px",
};

function Movies() {
  const [pageIndication, setPageIndication] = useState("Movies");
  return (
    <>
      <NavigationBar bgColor={(theme) => theme.palette.gray.dark5} />
      <Typography padding={"30px 40px"}>{pageIndication}</Typography>
      <Stack direction="row" sx={contentStyle}>
        <MovieFilter></MovieFilter>
        <MoviesDashboard></MoviesDashboard>
      </Stack>
    </>
  );
}

export default Movies;
