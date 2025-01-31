import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useAppContext } from "../Context/AppContext";

export let movieData = [
  {
    id: "tt1490017",
    title: "The Lego Movie",
    year: "2014",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
  },
  {
    id: "tt0462538",
    title: "The Simpsons Movie",
    year: "2007",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzIxN2IzOGItOTcyZi00MTkzLWE4ZjktZTdlOWFiYWE4NzlmXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt0175142",
    title: "Scary Movie",
    year: "2000",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt6718170",
    title: "The Super Mario Bros. Movie",
    year: "2023",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGZlN2EzOTYtMzUzOS00NTM3LTg0MTQtZDVjZGM4YmJlNWNhXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt0389790",
    title: "Bee Movie",
    year: "2007",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg",
  },
  {
    id: "tt0257106",
    title: "Scary Movie 2",
    year: "2001",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjZlOTgzNmUtNjZlYS00NWFjLTg4ZDktMWY4NDIxMjVjZjdhXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt4116284",
    title: "The Lego Batman Movie",
    year: "2017",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  },
  {
    id: "tt0306047",
    title: "Scary Movie 3",
    year: "2003",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg",
  },
  {
    id: "tt0362120",
    title: "Scary Movie 4",
    year: "2006",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjExNDQwM2QtYjFiNy00N2ZlLWE4ZGEtODdmYjY5NDdhNWE3XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: "tt0277371",
    title: "Not Another Teen Movie",
    year: "2001",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjllYzVjNjItYjQ2Ni00OGU4LTlkYjItMDYxOTBlM2YzNDA5XkEyXkFqcGc@._V1_SX300.jpg",
  },
];

export const updateMovieData = (updatedMovies) => {
  movieData = [...updatedMovies];
};

const columns = [
  { field: "id", headerName: "IMDb ID", width: 150 },
  { field: "title", headerName: "Title", width: 250, editable: true },
  { field: "year", headerName: "Year", width: 120, editable: true },
  {
    field: "poster",
    headerName: "Poster",
    width: 150,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Movie Poster"
        style={{ width: "50px", height: "75px", objectFit: "cover" }}
      />
    ),
  },
];

export default function DataGridDemo() {
  const { darkMode } = useAppContext();

  const [movies, setMovies] = useState(movieData);

  const handleRowEdit = (updatedRow) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === updatedRow.id ? { ...movie, ...updatedRow } : movie
    );
    setMovies(updatedMovies);
    updateMovieData(updatedMovies);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={movies}
        columns={columns}
        getRowId={(row) => row.id}
        processRowUpdate={(updatedRow) => {
          handleRowEdit(updatedRow);
          return updatedRow;
        }}
        pageSizeOptions={[5, 10, 15]} 
 
      />
    </Box>
  );
}
