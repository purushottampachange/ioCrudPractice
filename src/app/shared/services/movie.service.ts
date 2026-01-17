import { Injectable } from '@angular/core';
import { Imovie } from '../model/movie';
import { movies } from '../consts/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() { }

  dataEdit$ : Subject<Imovie> = new Subject()

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

  onUpdateObj(movie : Imovie){
    let getIndex = this.movieArr.findIndex(p => p.id === movie.id)
     this.movieArr[getIndex] = movie
  }

  
}
