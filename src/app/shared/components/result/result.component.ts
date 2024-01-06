import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls:['./result.component.scss']
})
export class ResultComponent {
  constructor(private dialogRef: MatDialogRef<ResultComponent>, private router: Router,
    // Inject the data passed from the MyCoursesComponent
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  closeDialog(){
    if (this.data.buttontxt === 'عربة التسوق') {
      // Handle goToCart
      this.router.navigate(['checkout']);
      this.dialogRef.close();
    } else if (this.data.buttontxt === 'حسنا') {
      this.dialogRef.close();
    }
  }
}