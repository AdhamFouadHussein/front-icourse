import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  email: any;
  otp = false;

  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  })


  constructor(private router: Router) { }

  sentCode() {
    console.log(this.forgotForm.value);
    this.otp = true;
  }

  sentVerify() {
    console.log(this.otpForm.value);
    this.router.navigate(['/update-password'])
  }

  resendCode() {
    //   const formData = new FormData();
    //   formData.append('email', this.email);

    //   this.http.Post(Account.postResend, formData).subscribe({
    //     next: (res) => {

    //       Swal.fire({
    //         icon: 'success',
    //         title: res.message,
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //     },
    //     error: (err) => {
    //       // console.log(err);
    //       Swal.fire({
    //         icon: 'error',
    //         title: err.error.message,
    //         showConfirmButton: false,
    //         timer: 2500
    //       })
    //     },
    //   });
  }

  ngOnInit(): void {
  }
}
