import { Component, OnDestroy, OnInit } from '@angular/core';
import { overwrite, getName, getNameList, getData } from 'country-list';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
export interface User {
  username: string;
  city: string;
  address: string;
  phone_number: string;
  full_name: string;
  email: string;
  password: string;
  status: number;
  message: string;
  token:string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user : User = {
    username: '',
    city: '',
    address: '',
    phone_number: '',
    full_name: '',
    email: '',
    password: '',
    status: 0,
    message: '',
    token:''
  }
  countries = getData();
  hide = true;
  token!: string;
  registerSub!: Subscription;

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    phone_number: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
      ),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.matchValue('password'),
    ]),
    country: new FormControl('SA', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]),
  });

  matchValue(matchTo: string): ValidatorFn {
    return (control: any) => {
      return control?.value === control.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }
  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  register() {
    this.authService.register(this.registerForm.value).subscribe((response: any) => {
      this.user = response as User;
      if (this.user.status === 200){
        console.log(response);
        localStorage.setItem('token', this.user.token);
        localStorage.setItem('full_name', this.user.full_name);
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('username', this.user.username);
        localStorage.setItem('phone_number', this.user.phone_number);
        localStorage.setItem('city', this.user.city);
        localStorage.setItem('address', this.user.address);
       // localStorage.setItem('pp_src', this.user.pp_src);
        this.router.navigate(['/home']);
      } else {
        console.log(response);
        alert(this.user.message);
      }
    },
    error => {
      console.error(error);
      // Handle your error here. This could be showing an error message to the user, etc.
    });
    console.log(this.registerForm.value);
  }
}
