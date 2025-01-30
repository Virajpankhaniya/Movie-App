import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const MovieDetailPage = () => {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <Box sx={{ maxWidth: 900, margin: "0 auto", padding: 3 }}>
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={movie.poster}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {movie.title}
          </Typography>
          <Typography variant="h6">Year: {movie.year}</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            <strong>IMDb ID:</strong> {movie.id}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieDetailPage;
