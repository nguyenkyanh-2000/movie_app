import React from "react";
import { Box } from "@mui/system";
import { Grid, Pagination, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

const containerStyle = (theme) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  flexGrow: 1,
  padding: "0px 24px 0px 48px",
  [theme.breakpoints.down("md")]: {
    marginTop: 6,
  },
});

function MoviesDashboard({ movies, page, setPage, totalPages }) {
  return (
    <Box sx={containerStyle}>
      {movies.length > 0 ? (
        <>
          <Grid container spacing={4} justifyContent="center">
            {movies.map((movie, index) => (
              <Grid item key={index}>
                <MovieCard movie={movie}></MovieCard>
              </Grid>
            ))}
          </Grid>
          <Pagination
            sx={{ alignSelf: "center", marginTop: 6 }}
            page={page}
            count={totalPages}
            onChange={(event, value) => setPage(value)}
          ></Pagination>
        </>
      ) : (
        <Typography variant="h4">{`No results :(`}</Typography>
      )}
    </Box>
  );
}

export default MoviesDashboard;
