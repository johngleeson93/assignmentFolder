import React from "react";
import TvShowHeader from "../components/tvShowHeader";
import { SampleMovie, SampleTvShow } from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import tvShowHeader from "../components/tvShowHeader";

export default {
  title: "Tv Show Details Page/tvShowHeader",
  component: tvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowHeader tvShow = {SampleTvShow} />;

Basic.storyName = "Default";