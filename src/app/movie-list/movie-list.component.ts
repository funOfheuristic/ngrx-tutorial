import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Movie } from '../Models/movie';
import { DataService } from '../Service/data.service';
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
export class MovieListComponent implements OnInit {
  movies$ = this.store.pipe(select(greater(1000)));
  constructor(private store: Store<MovieState>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.movies$ = this.store.pipe(select(greater(2000)));
    }, 5000);
  }
}
