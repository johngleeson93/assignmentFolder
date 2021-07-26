import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import MoodBadIcon from '@material-ui/icons/MoodBad';

const MoodBadIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWorst = (e) => {
    e.preventDefault();
    context.addToWorst(movie);
  };
  return (
    <IconButton aria-label="add to Worst" onClick={handleAddToWorst}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default MoodBadIcon;