import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import { MovieState } from '../Reducers/movie.reducers';

export const movieSelector = createSelector(
  (state: MovieState) => state.movies,
  (movies: ReadonlyArray<Movie>) => movies
);

export const movieUserSelector = createSelector(
  (state: MovieState) => state.movies,
  (state: MovieState) => state.user,
  (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
    return movies.filter((movie: Movie) => movie.userName === user);
  }
);

export const greater = (amount: number) =>
  createSelector(movieSelector, (movies) => {
    return movies.filter((movie: Movie) => movie.earning >= amount);
  });

const routeParams = createSelector(
  (state: MovieState) => state.router.state,
  (state) => state.params
);

const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouter);

export const movie = createSelector(
  movieSelector,
  routeParams,
  // selectRouteParams,
  (movies: ReadonlyArray<Movie>, { id }) => {
    return movies.filter((m) => m.id === Number(id))[0];
  }
);
