import styled from "@emotion/styled";

export const FilterSectionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "375px",
  flexGrow: 0.35,
  padding: 2,
  boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.5)",
  borderRadius: 8,
  backgroundColor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(40px)",
  [theme.breakpoints.down("md")]: {
    maxWidth: "900px",
  },
}));
