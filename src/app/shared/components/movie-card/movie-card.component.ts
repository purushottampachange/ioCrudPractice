import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieObj!: Imovie

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
  }

  onRemove(id: number) {
    this._movieService.onRemove(id)
  }
}
