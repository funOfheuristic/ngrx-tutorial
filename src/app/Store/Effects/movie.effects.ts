import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import {
  getMovies,
  getMoviesSuccess,
  addMovies,
  addMoviesSuccess,
} from '../Actions/movie.action';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess({ movies })),
          catchError(() => EmptyError)
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMovies),
      tap((movie) => console.log(movie)),
      concatMap((newMovie) =>
        this.dataService.addMovies(newMovie).pipe(
          map((movie) => addMoviesSuccess(movie)),
          catchError(() => EmptyError)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
