import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './Models/movie';
import { DataService } from './Service/data.service';
import {
  addMovies,
  assignUser,
  getMovies,
  logout,
} from './Store/Actions/movie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'movieApp';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    this.store.dispatch(assignUser('Subrat'));
    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }

  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
    this.newMovie = new Movie();
    // this.dataService.addMovies(this.newMovie).subscribe((res) => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }

  changeUser(): void {
    this.store.dispatch(assignUser('Sanjit'));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
