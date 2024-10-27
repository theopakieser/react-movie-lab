import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddPlaylistIcon = (e) => {
    e.preventDefault();
    context.handleAddPlaylistIcon(movie);
  };

  return (
    <IconButton aria-label="add to watch list" onClick={handleAddPlaylistIcon}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;