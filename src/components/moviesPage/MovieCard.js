import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { BASE_IMAGE_URL } from "../../app/config";

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 154 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={
            movie.poster_path
              ? `${BASE_IMAGE_URL}/w154/${movie.poster_path}`
              : `no_image_available.jpg`
          }
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {movie.original_title}
          </Typography>
          <Typography variant="body4" color="text.secondary">
            {`Average rating: ${movie.vote_average}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
