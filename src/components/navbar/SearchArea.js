import React from "react";
import Box from "@mui/material/Box";
import { InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const style = {
  position: "relative",
  backgroundColor: (theme) => alpha(theme.palette.gray.light3, 0.45),
  width: "350px",
  borderRadius: "8px",
  transition: "ease-out 0.5s",
  "&:hover": {
    backgroundColor: (theme) => alpha(theme.palette.gray.light3, 0.65),
  },
};

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const inputStyle = {
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: (theme) => theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
};

export default function SearchArea() {
  return (
    <Box sx={style}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBase sx={inputStyle} placeholder="Search"></InputBase>
    </Box>
  );
}
