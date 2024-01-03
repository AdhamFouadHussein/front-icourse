import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-result',
  template: `
    <h1 mat-dialog-title>Result</h1>
    <div mat-dialog-content>
      <p>{{ data.result}}</p>
    </div>
  `
})
export class ResultComponent {
  constructor(
    // Inject the data passed from the MyCoursesComponent
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}