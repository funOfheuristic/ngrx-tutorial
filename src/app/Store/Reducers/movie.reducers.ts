import { RouterReducerState } from '@ngrx/router-store';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import {
  addMovies,
  addMoviesSuccess,
  assignUser,
  deleteMovieSuccess,
  getMoviesSuccess,
  updateMovieSuccess,
} from '../Actions/movie.action';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
  user: Readonly<string>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, { movies }) => [...movies]),
  on(addMoviesSuccess, (state, { movie }) => [...state, movie]),
  on(deleteMovieSuccess, (state, { movieId }) =>
    state.filter((movie) => movie.id !== movieId)
  ),
  on(updateMovieSuccess, (state, { movie }) => {
    const movies = state.map((m) => {
      if (m.id === movie.id) {
        return movie;
      }
      return m;
    });
    return movies;
  })
);

const initialUserSate = '';
export const userReducer = createReducer(
  initialUserSate,
  on(assignUser, (state, { user }) => user)
);
