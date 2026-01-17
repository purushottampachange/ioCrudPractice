import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NgForm } from '@angular/forms';
import { Imovie } from '../../model/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @ViewChild('movieForm') movieForm!: NgForm;

  EditId !: number

  constructor(private movieService: MovieService) { }

  isinEditMode: boolean = false

  ngOnInit(): void {

    this.movieService.dataEdit$
      .subscribe(res => {
        this.movieForm.form.patchValue(res)
        this.isinEditMode = true
        this.EditId = res.id

      })

  }

  onUpdate() {
    if (this.movieForm.valid) {
      let UPDATE_OBJ: Imovie = {
        ...this.movieForm.value,
        id: this.EditId
      }

      this.movieService.onUpdateObj(UPDATE_OBJ)
     this.movieForm.reset();
     this.isinEditMode = false;


    }
  }

}
