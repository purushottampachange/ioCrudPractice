import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieObj! : Imovie

  constructor() { }

  ngOnInit(): void {
  }

}
