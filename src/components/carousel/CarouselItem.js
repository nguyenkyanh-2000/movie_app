import React from "react";
import { Stack, Button } from "@mui/material";

function CarouselItem({ item }) {
  return (
    <Stack spacing={2} padding={"48px"}>
      <img src={item.image} alt=""></img>
      <p> {item.name}</p>
      <p> {item.description}</p>
    </Stack>
  );
}

export default CarouselItem;
