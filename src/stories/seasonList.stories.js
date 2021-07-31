import React from "react";
import SeasonList from "../components/seasonList";
import { SampleTvShow } from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";
export default {
  title: "Home Page/seasonList",
  component: SeasonList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};
export const Basic = () => {
  
  return (
    <Grid container spacing={5}>
      <SeasonList
      numberOfSeasons={SampleTvShow.number_of_seasons}
      />
    </Grid>
  );
};
Basic.storyName = "Default";