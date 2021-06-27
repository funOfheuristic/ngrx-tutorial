import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Movie } from '../Models/movie';
import { MovieState } from '../Store/Reducers/movie.reducers';
import { movie } from '../Store/Selector/movie.selector';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie$ = this.store.pipe(select(movie));
  constructor(private store: Store<MovieState>) {}

  ngOnInit(): void {}
}
