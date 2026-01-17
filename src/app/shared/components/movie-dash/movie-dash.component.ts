import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Imovie } from '../../model/movie';

@Component({
  selector: 'app-movie-dash',
  templateUrl: './movie-dash.component.html',
  styleUrls: ['./movie-dash.component.scss'],
})
export class MovieDashComponent implements OnInit {
  movieArr: Array<Imovie> = [];

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieArr = this._movieService.fetchMovies();

    console.log(this.movieArr);
  }
}
