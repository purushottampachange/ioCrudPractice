import { Injectable } from '@angular/core';
import { Imovie } from '../model/movie';
import { movies } from '../consts/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() { }

  movieArr: Array<Imovie> = movies;

  fetchMovies() {
    return this.movieArr;
  }
  onAdd(movie: Imovie) {
    this.movieArr.unshift(movie)
  }
  onRemove(id: number) {
    let value = this.movieArr.findIndex(m => m.id === id)
    if (value > -1) {
      this.movieArr.splice(value, 1)
    }
  }
}
