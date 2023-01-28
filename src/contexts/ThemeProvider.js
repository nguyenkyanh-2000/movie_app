import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const THEMES = {
  black: "#0B2B40",
  green: "#185359",
  yellow: "#F2BE22",
  blue: "#30A5BF",
};

const WHITE = {
  main: "#FFFFFF",
};

const BLACK = {
  main: "#000000",
};

const GRAY = {
  light5: "#f2f2f7",
  light4: "#e5e5ea",
  light3: "#d1d1d6",
  light2: "#c7c7cc",
  light1: "#aeaeb2",
  main: "#8e8e93",
  dark1: "#636366",
  dark2: "#48484a",
  dark3: "#3a3a3c",
  dark4: "#2c2c2e",
  dark5: "#1c1c1e",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      gray: GRAY,
      white: WHITE,
      black: BLACK,
      thematic: THEMES,
    },
    typography: {
      fontFamily: `"Inter", sans-serif`,
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
