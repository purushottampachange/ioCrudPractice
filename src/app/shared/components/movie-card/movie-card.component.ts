import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieObj!: Imovie

  constructor(private _movieService: MovieService,
    private _snackBar: SnackBarService,
    private _matDailog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onRemove(id: number) {
    let dailog = this._matDailog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        this._movieService.onRemove(id)
        this._snackBar.showMessege(`Movie Removed SuccessFully`)
      }
    })
  }
}
