import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { BASE_IMAGE_URL } from "../../app/config";
import { useNavigate } from "react-router-dom";

function CarouselItem({ item }) {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} padding={"48px"} alignItems="center">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={`${BASE_IMAGE_URL}/original${item.backdrop_path}`}
          width={"100%"}
          height={"auto"}
          alt=""
          onClick={() => navigate(`/movie/${item.id}`)}
        ></img>
      </Box>
      <Typography variant="h6" fontWeight={700}>
        {item.original_title}
      </Typography>
      <Typography variant="h8">{item.overview}</Typography>
    </Stack>
  );
}

export default CarouselItem;
