import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
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
  private readonly action$ = inject(Actions);
  private readonly dataService = inject(DataService);

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
}
