import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private dailogRef: MatDialogRef<MovieCardComponent>) { }

  ngOnInit(): void {
  }

  onRemove() {
    this.dailogRef.close(true)
  }
  onCancel() {
    this.dailogRef.close(false)
  }
}
