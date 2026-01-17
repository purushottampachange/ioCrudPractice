import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackbar: MatSnackBar) { }

  showMessege(msg: string) {
    this._snackbar.open(msg, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
