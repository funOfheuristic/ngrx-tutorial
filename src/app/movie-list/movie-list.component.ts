import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input()
  movies: Movie[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
