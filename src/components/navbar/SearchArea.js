import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInputBase } from "./StyledInputBase";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";

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

export default function SearchArea() {
  const { register, control, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = (data) => {
    //setSearchParams({ query: data.searchQuery });
    console.log(data);
  };
  return (
    <Box sx={style}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="searchQuery"
          render={({ ...field }) => (
            <StyledInputBase
              placeholder="Search"
              {...register("searchQuery")}
            />
          )}
        ></Controller>
      </form>
    </Box>
  );
}
