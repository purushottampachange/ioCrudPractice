import { Injectable } from '@angular/core';
import { Imovie } from '../model/movie';
import { movies } from '../consts/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  movieArr: Array<Imovie> = movies;

  fetchMovies() {
    return this.movieArr;
  }
}
