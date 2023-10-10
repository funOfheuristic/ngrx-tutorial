import { createAction, props } from '@ngrx/store';
import { Movie } from '../../Models/movie';

export const getMovies = createAction('[Movie] Get movie');
export const getMoviesSuccess = createAction(
  '[Movie] Get movie success',
  (movies: ReadonlyArray<Movie>) => ({ movies })
  // props<{ movies: ReadonlyArray<Movie> }>()
);
export const addMovies = createAction(
  '[Movie] Add movie',
  (movie: Movie) => ({ movie })
  // props<{ movie: Movie }>()
);
export const addMoviesSuccess = createAction(
  '[Movie] Add movie success',
  // props<{ movie: Movie }>(),
  (movie: Movie) => ({ movie })
);

export const assignUser = createAction(
  '[User] assign user',
  (user: string) => ({ user })
);

export const deleteMovie = createAction(
  '[Movie] Delete movie',
  (movieId: number) => ({ movieId })
);

export const deleteMovieSuccess = createAction(
  '[Movie] Delete movie success',
  (movieId: number) => ({ movieId })
);

export const updateMovie = createAction(
  '[Movie] Update movie',
  (movie: Movie) => ({ movie })
);

export const updateMovieSuccess = createAction(
  '[Movie] Update movie success',
  (movie: Movie) => ({ movie })
);

export const logout = createAction('[User] logout');
