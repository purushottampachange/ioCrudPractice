import { Injectable } from '@angular/core';
import { Imovie } from '../model/movie';
import { movies } from '../consts/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  dataEdit$ : Subject<Imovie> = new Subject()

  movieArr: Array<Imovie> = movies;

  fetchMovies() {
    return this.movieArr;
  }

  onUpdateObj(movie : Imovie){
    let getIndex = this.movieArr.findIndex(p => p.id === movie.id)
     this.movieArr[getIndex] = movie
  }

  
}
