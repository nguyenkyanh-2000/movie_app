import React from "react";
import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import Router from "./routes";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
