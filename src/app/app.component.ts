import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './Models/movie';
import { DataService } from './Service/data.service';
import { addMovies, getMovies } from './Store/Actions/movie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'movieApp';
  constructor(private dataService: DataService, private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    this.dataService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
    this.dataService.addMovies(this.newMovie).subscribe((res) => {
      this.getAllMovies();
      this.newMovie = new Movie();
    });
  }
}
