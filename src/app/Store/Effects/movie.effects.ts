import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import { getMovies, getMoviesSuccess } from '../Actions/movie.action';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      tap(() => console.log('clles')),
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          catchError(() => EmptyError)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
