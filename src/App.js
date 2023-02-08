import React from "react";
import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import { getGenres } from "./data/fetchGenres";
import Router from "./routes";

function App() {
  getGenres();
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
