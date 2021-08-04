import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

function EpisodeCard({ episode, action }) {
  const classes = useStyles();
  const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === episode.id)) {
    episode.favorite = true;
  } else {
    episode.favorite = false
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          episode.favorite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {episode.name}{" "}
          </Typography>
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {episode.air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {episode.vote_average}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {`vote count: ${episode.vote_count}`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(episode)}
        <Link to={`/episode/${episode.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default EpisodeCard;