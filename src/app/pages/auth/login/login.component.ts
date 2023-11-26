import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

export interface LoginDetail {
  status: number;
  message: string;
  token: string,
  full_name: string
  email: string
  username: string,
  phone_number: string,
  city: string,
  address: string,
 // pp_src: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  loginDetail: LoginDetail = {
    token: '',
    full_name: '',
    email: '',
    username: '',
    phone_number: '',
    city: '',
    address: '',
  // pp_src: '',
    status: 0,
    message: ''
  }; 
  hide = true;
  remember = false;
  token!: string;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      this.loginDetail = response as LoginDetail;
      if (this.loginDetail.status === 200){
        console.log(response);
        localStorage.setItem('token', this.loginDetail.token);
        localStorage.setItem('full_name', this.loginDetail.full_name);
        localStorage.setItem('email', this.loginDetail.email);
        localStorage.setItem('username', this.loginDetail.username);
        localStorage.setItem('phone_number', this.loginDetail.phone_number);
        localStorage.setItem('city', this.loginDetail.city);
        localStorage.setItem('address', this.loginDetail.address);
       // localStorage.setItem('pp_src', this.loginDetail.pp_src);
        this.router.navigate(['/home']);
      } else {
        console.log(response);
        alert(this.loginDetail.message);
      }
    },
    error => {
      console.error(error);
      // Handle your error here. This could be showing an error message to the user, etc.
    });
    console.log(this.loginForm.value);
  }
}
