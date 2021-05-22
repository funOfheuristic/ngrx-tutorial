import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import {
  addMovies,
  getMovies,
  getMoviesSuccess,
} from '../Actions/movie.action';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, movies) => [...movies]),
  on(addMovies, (state, movie) => [...state, movie])
);
