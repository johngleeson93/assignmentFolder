import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EpisodeList from "../episodeList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function EpisodesListPageTemplate({ episodes, title, action }) {
//using ES6 object de-structuring on the props parameter above.
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedEpisodes = episodes
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        </Grid>
        <EpisodeList action={action} episodes={displayedEpisodes}></EpisodeList>
      </Grid>
    </Grid>
  );
}
export default EpisodesListPageTemplate;