import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Imovie } from '../../model/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @ViewChild('movieForm') movieForm!: NgForm
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
  }

  onAdd() {
    if (this.movieForm.valid) {
      let createObj: Imovie = {
        ...this.movieForm.value,
        id: Date.now().toString()
      }
      this._movieService.onAdd(createObj)
      this.movieForm.reset()
    }
  }

}
