import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;
  loadingMovies: Array<number>;

  constructor(private movieService: MovieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    //this.movies$ = this.movieService.getMovies();
    this.loadingMovies = new Array(10).fill(0).map((n, index) => index);

    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navbarService.title.next('Movie Night');
  }

}
