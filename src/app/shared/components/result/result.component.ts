import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls:['./result.component.scss']
})
export class ResultComponent {
  constructor(private dialogRef: MatDialogRef<ResultComponent>,
    // Inject the data passed from the MyCoursesComponent
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  closeDialog(){
    this.dialogRef.close(); // <- Close the mat dialog
  }
}