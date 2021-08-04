import React from "react";
import Episode from "../episodeCard";
import Grid from "@material-ui/core/Grid";

const EpisodeList = ( {episodes, action }) => {
  let episodeCards = episodes.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Episode key={m.id} episode={m} action={action} />
    </Grid>
  ));
  return episodeCards;
};
export default EpisodeList;