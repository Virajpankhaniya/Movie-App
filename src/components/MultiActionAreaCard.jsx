import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

export default function MultiActionAreaCard({ movie }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="400"
            image={movie.poster}
            alt={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Year: {movie.year}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Modal for Movie Details */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{movie.title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="400"
            image={movie.poster}
            alt={movie.title}
          />
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Year: {movie.year}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            <strong>IMDb ID:</strong> {movie.id}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
