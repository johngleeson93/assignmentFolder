import React from "react";
import TvShowList from "../components/tvShowList";
import { SampleTvShow } from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";
export default {
  title: "Home Page/tvShowList",
  component: TvShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};
export const Basic = () => {
  const tvShows = [
    { ...SampleTvShow, id: 1 },
    { ...SampleTvShow, id: 2 },
    { ...SampleTvShow, id: 3 },
    { ...SampleTvShow, id: 4 },
    { ...SampleTvShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TvShowList
        tvShows={tvShows}
        action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";