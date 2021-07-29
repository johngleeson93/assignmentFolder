import React from "react";
import TvShowDetails from "../components/tvShowDetails";
import { SampleTvShow } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Tv Show Details Page/Tv Show Details",
  component: TvShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TvShowDetails tvShow={SampleTvShow} />;

Basic.storyName = "Default";