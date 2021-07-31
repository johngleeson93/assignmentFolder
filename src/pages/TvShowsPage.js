import React from "react";
import PageTemplate from '../components/templateTvShowListPage';
import { getTvShows } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import AddToMustWatchIcon from "../components/cardIcons/addToFavorites";

const TvShowsPage = (props) => {
 
  // useQuery uses the 2nd arg to perform HTTP, 1st arg is used as the cache entry key
    const {  data, error, isLoading, isError }  = useQuery('TV', getTvShows)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const tvShows = data.results;
  
    // Redundant, but necessary to avoid app crashing.
    const favorites = tvShows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    return (
      <PageTemplate
        title="Popular Tv Shows"
        tvShows={tvShows}
        action={(tvShow) => {
          return <AddToMustWatchIcon tvShow={tvShow} />
        }}
      />    
    );
  };
  
  export default TvShowsPage;