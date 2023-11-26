import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.scss']
})
export class UpdatePassComponent implements OnInit {

  hide = true;

  constructor(private router: Router) { }

  changePassForm = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
      ),
    ]),
    confirmPassword: new FormControl('', [Validators.required, this.matchValue('newPassword')])

  });

  matchValue(matchTo: string): ValidatorFn {
    return (control: any) => {
      return control?.value === control.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }


  get password() {
    return this.changePassForm.get('password');
  }

  get confirmPassword() {
    return this.changePassForm.get('confirmPassword');
  }


  updatePass() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }
}
