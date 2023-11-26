import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface LoginDetail {
  token: string,
  full_name: string
  email: string
  username: string,
  phone_number: string,
  city: string,
  address: string,
 // pp_src: any,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  lang!: boolean;
  positionMenu: any;

  profile = {
    // fullName: '',
    // email: '',
    // phone: '',
    // city: '',
    // address: '',
    fullName: localStorage.getItem('full_name'),
    email: localStorage.getItem('email'),
    phone: localStorage.getItem('phone_number'),
    city: localStorage.getItem('city'),
    address: localStorage.getItem('address'),
  };

  profileForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl(''),
  });

  constructor() {
    if (localStorage.getItem('curentLang') == 'ar') {
      this.lang = true;
      this.positionMenu = 'after';
    } else {
      this.lang = false;
      this.positionMenu = 'before';
    }
  }

  updateProfile() {
    console.log(this.profileForm.value);
  }
}
