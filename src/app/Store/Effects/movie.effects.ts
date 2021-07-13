import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import {
  getMovies,
  getMoviesSuccess,
  addMovies,
  addMoviesSuccess,
  deleteMovie,
  deleteMovieSuccess,
  updateMovie,
  updateMovieSuccess,
} from '../Actions/movie.action';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMovies),
      tap((movie) => console.log(movie)),
      concatMap(({ movie }) =>
        this.dataService.addMovies(movie).pipe(
          map((newMovie) => addMoviesSuccess(newMovie)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteMovie),
      mergeMap(({ movieId }) =>
        this.dataService.deleteMovie(movieId).pipe(
          map(() => deleteMovieSuccess(movieId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateMovie),
      concatMap(({ movie }) =>
        this.dataService.updateMovies(movie).pipe(
          map(() => updateMovieSuccess(movie)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
