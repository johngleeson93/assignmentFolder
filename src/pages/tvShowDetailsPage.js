
import React from "react";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
import { getTvShow } from "../api/tmdb-api";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import SeasonList from "../components/seasonList";

const TvShowDetailsPage = (props) => {
  //const id allows the component to extract the tvShow id from the browser's parameterized URL address
  const { id } = props.match.params;

  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: id }],
    getTvShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  //In the below  code the children prop will be bound to: <TvShowDetails tvShow={tvShow} />
  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
            <TvShowDetails tvShow={tvShow} />
            <SeasonList numberOfSeasons = {tvShow.number_of_seasons}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tvShow details</p>
      )}
    </>
  );
};

export default withRouter(TvShowDetailsPage);


