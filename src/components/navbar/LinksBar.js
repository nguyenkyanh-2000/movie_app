import React from "react";
import { Stack } from "@mui/system";
import { useTheme, useMediaQuery, Button } from "@mui/material";
import LinksModal from "./LinksModal";
import { useNavigate } from "react-router-dom";

const btnStyle = {
  fontWeight: "700",
  color: (theme) => theme.palette.gray.light5,
};

function LinksBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  return isTablet ? (
    <>
      <Stack direction="row" spacing={5} justifyContent="center">
        <Button sx={btnStyle} onClick={() => navigate("/")}>
          Home
        </Button>
        <Button sx={btnStyle} onClick={() => navigate("/movie")}>
          Discover
        </Button>
        <Button sx={btnStyle}> About</Button>
        <Button sx={btnStyle} onClick={() => navigate("/login")}>
          Login
        </Button>
      </Stack>
    </>
  ) : (
    <>
      <LinksModal />
    </>
  );
}

export default LinksBar;
