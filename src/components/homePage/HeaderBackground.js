import styled from "@emotion/styled";

export const HeaderBackground = styled("div")(({ theme }) => ({
  position: "relative",
  height: "fit-content",
  padding: "0px 0px 40px 0px",
  background: `linear-gradient(-45deg, ${theme.palette.thematic.black}, ${theme.palette.thematic.green}, ${theme.palette.thematic.yellow}, ${theme.palette.thematic.blue})`,
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",

  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}));
