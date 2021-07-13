import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from '../Models/movie';
import { DataService } from '../Service/data.service';
import { deleteMovie, updateMovie } from '../Store/Actions/movie.action';
import { MovieState } from '../Store/Reducers/movie.reducers';
import {
  greater,
  movieSelector,
  movieUserSelector,
} from '../Store/Selector/movie.selector';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies$ = this.store.pipe(select(movieUserSelector));
  movies: Movie[];
  done = new Subject();
  selectedIndex: number = null;
  earning = 0;
  constructor(private store: Store<MovieState>) {}

  ngOnInit(): void {
    this.movies$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.movies = JSON.parse(JSON.stringify(data))));
    // setTimeout(() => {
    //   this.movies$ = this.store.pipe(select(greater(2000)));
    // }, 5000);
  }

  enableEdit(movie: Movie, index: number): void {
    this.selectedIndex = index;
    this.earning = movie.earning;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  // update the earning from the input then dispatch update action
  update(movie: Movie): void {
    const m = { ...movie };
    m.earning = this.earning;
    // dispatch action to update
    this.store.dispatch(updateMovie(m));
    this.selectedIndex = null;
  }

  deleteMovie(movieId: number): void {
    this.store.dispatch(deleteMovie(movieId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}
