import React from "react";
import EpisodeCard from "../components/episodeCard";
import { SampleEpisode } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Home Page/EpisodeCard",
  component: EpisodeCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <EpisodeCard
      episode={SampleEpisode}
      action={(episode) => <AddToFavoritesIcon episode={episode} />}
      taging={(episode) => null}
    />
  );
};
Basic.storyName = "Default";
