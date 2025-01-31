import { useState } from "react";
import { Grid2, Typography, Button } from "@mui/material";
import MultiActionAreaCard from "./MultiActionAreaCard";
import { movieData } from "./DataGridDemo";
import { useAppContext } from "../context/AppContext";

const HomePage = () => {
  const { searchQuery } = useAppContext();
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredMovies = movieData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.year.toString().includes(searchQuery)
  );

  const sortedMovies = [...filteredMovies].sort((a, b) =>
    sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Button
        variant="contained"
        onClick={() => setSortOrder("asc")}
        style={{ margin: "5px" }}
      >
        Sort A-Z
      </Button>
      <Button
        variant="contained"
        onClick={() => setSortOrder("desc")}
        style={{ margin: "5px" }}
      >
        Sort Z-A
      </Button>

      <Grid2 container spacing={2} justifyContent="center" style={{ marginTop: "10px" }}>
        {sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => (
            <Grid2 item xs={12} sm={6} md={3} lg={3} key={movie.id}>
              <MultiActionAreaCard movie={movie} />
            </Grid2>
          ))
        ) : (
          <Grid2 item xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h6" color="text.secondary">
              No movies found. Try another search.
            </Typography>
          </Grid2>
        )}
      </Grid2>
    </div>
  );
};

export default HomePage;
