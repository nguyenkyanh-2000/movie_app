import React from "react";
import { Box, Typography } from "@mui/material";
import SearchArea from "./SearchArea";
import LinksBar from "./LinksBar";

const navBarStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "16px",
};

const logoStyle = (theme) => ({
  marginX: "auto",
  padding: "6px 8px",
  fontWeight: "1000",
  color: (theme) => theme.palette.gray.light5,
});

function NavigationBar({ bgColor = "transparent" }) {
  return (
    <Box backgroundColor={bgColor} sx={navBarStyle}>
      <SearchArea></SearchArea>
      <Typography sx={logoStyle}> YourMOVIES</Typography>
      <LinksBar></LinksBar>
    </Box>
  );
}

export default NavigationBar;
