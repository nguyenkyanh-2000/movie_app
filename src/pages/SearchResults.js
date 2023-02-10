import React, { useEffect, useState } from "react";
import NavigationBar from "../components/navbar/NavigationBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";
import { searchMovies } from "../data/fetchSearchResults";
import { BASE_IMAGE_URL } from "../app/config";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const currentSearchQuery = searchParams.get("query");

  useEffect(() => {
    const getSearchData = async () => {
      const data = await searchMovies(currentSearchQuery, page);
      setTotalPages(data.total_pages);
      setSearchData(data.results);
    };
    getSearchData();
  }, [currentSearchQuery, totalPages, page]);

  return (
    <>
      <NavigationBar bgColor={(theme) => theme.palette.gray.dark5} />
      {searchData.length > 0 ? (
        <Stack marginTop={5} alignItems="center" spacing={5} padding={4}>
          <Typography variant="h4" fontWeight={700}>
            {`Results for "${currentSearchQuery}"`}
          </Typography>
          {searchData.map((result, index) => {
            return (
              <Card
                key={index}
                sx={{ display: "flex", width: "100%" }}
                onClick={() => navigate(`/movie/${result.id}`)}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={
                    result.poster_path
                      ? `${BASE_IMAGE_URL}/w154/${result.poster_path}`
                      : `no_image_available.jpg`
                  }
                  alt=""
                />
                <CardContent sx={{ flex: "1" }}>
                  <Typography component="div" variant="h5">
                    {result.original_title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {result.overview}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
          <Pagination
            sx={{ marginTop: 6 }}
            page={page}
            count={totalPages}
            onChange={(event, value) => setPage(value)}
          ></Pagination>
        </Stack>
      ) : (
        <Typography marginTop={5} textAlign={"center"}>
          No results
        </Typography>
      )}
    </>
  );
}

export default SearchResults;
