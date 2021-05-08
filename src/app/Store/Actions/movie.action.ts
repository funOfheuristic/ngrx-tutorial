import { createAction, props } from '@ngrx/store';
import { Movie } from '../../Models/movie';

export const getMovies = createAction('[Movie] Get movie');
export const addMovies = createAction(
  '[Movie] Add movie',
  (movie: Movie) => movie
  // props<{ movie: Movie }>()
);
export const addMoviesSuccess = createAction(
  '[Movie] Add movie success',
  props<{ movie: Movie }>()
);
