import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const headerSectionStyle = {
  width: "100%",
  maxWidth: "550px",
  minWidth: "330px",
  padding: "0px 16px",
};

const headerSectionTitle = (theme) => ({
  fontSize: "90px",
  fontWeight: "600",
  lineHeight: "1",
  color: (theme) => theme.palette.gray.dark5,
  opacity: ".6",
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px",
  },
});

const headerSectionText = (theme) => ({
  fontSize: "18px",
  width: "100%",
  maxWidth: "450px",
  color: theme.palette.gray.light4,
  padding: "16px 0px",
});

const imageWrapper = (theme) => ({
  maxWidth: "700px",
  height: "auto",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

function HomePageHeaderSection() {
  const navigate = useNavigate();
  return (
    <Stack
      width={"80%"}
      marginTop={"100px"}
      marginX={"auto"}
      direction={"row"}
      spacing={9}
      alignItems={"center"}
    >
      <Box sx={headerSectionStyle}>
        <Typography sx={headerSectionTitle}>
          Millions of movies at your finger touch.
        </Typography>
        <Typography sx={headerSectionText}>
          Tune in to YourMOVIES anytime, on almost any device—no hardware
          required. With action, comedy, movies, news, and more streaming 24/7,
          there’s a movie for everyone.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/movie")}>
          Discover
        </Button>
      </Box>
      <Box sx={imageWrapper}>
        <img
          alt=""
          src="home-header-image.jpg"
          height={"100%"}
          width={"100%"}
          sx={{ borderRadius: "8px" }}
        ></img>
      </Box>
    </Stack>
  );
}

export default HomePageHeaderSection;
