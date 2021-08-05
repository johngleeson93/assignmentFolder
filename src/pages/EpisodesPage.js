import React from "react";
import PageTemplate from '../components/templateEpisodesListPage';
import { getTvSeason } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import AddToMustWatchIcon from "../components/cardIcons/addToFavorites";

const EpisodesPage = (props) => {
 
  // useQuery uses the 2nd arg to perform HTTP, 1st arg is used as the cache entry key
  const { id, number } = props.match.params;  
  const {  data:season, error, isLoading, isError }  = useQuery(
    ["season", { id: id , number: number }],
    getTvSeason
    )
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const episodes = season.episodes;

    // Redundant, but necessary to avoid app crashing.
    const favorites = episodes.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    return (
      <PageTemplate
        title="Popular Episodes"
        episodes={episodes}
        action={(episode) => {
          return <AddToMustWatchIcon episode={episode} />
        }}
      />    
    );
  };
  
  export default EpisodesPage;