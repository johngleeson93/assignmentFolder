import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./components/siteHeader";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import movieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import TopRatedPage from "./pages/topRatedMovies";
import TvShowsPage from "./pages/TvShowsPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import EpisodesPage from "./pages/EpisodesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={movieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/movies/topRated" component={TopRatedPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/tvShows" component={TvShowsPage} />
          <Route path="/tvShows/:id/season/:number" component={EpisodesPage} />
          <Route path="/tvShows/:id" component={TvShowDetailsPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
