import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";
import SearchResults from "../pages/SearchResults";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/movie/search?" element={<SearchResults />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
