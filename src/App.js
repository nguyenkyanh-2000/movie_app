import React from "react";
import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import { getGenres } from "./data/fetchGenres";
import Router from "./routes";
import AuthProvider from "./authentication/AuthProvider.js";

function App() {
  getGenres();
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
