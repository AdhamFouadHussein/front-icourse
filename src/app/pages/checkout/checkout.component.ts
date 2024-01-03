import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReloadService } from 'src/app/shared/services/reload.service';

export interface ResponseObject {
  url: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  isLoading = false;
  isLoggedIn = false;
  products: any;
  total: any;
  fullName: string = localStorage.getItem('full_name') || '';
  email: string = localStorage.getItem('email') || '';
  phoneNumber: string = localStorage.getItem('phone_number') || '';
  listCheckout = [
    // The array of payment methods
    { name: ' HYPER PAY', img: 'https://www.hyperpay.com/wp-content/uploads/2022/10/Hyperpay-logo-svg-1.png' },
  ];
  transId!: Number;
  constructor(public auth: AuthService, private route: ActivatedRoute, private http: HttpClient, private reloadService: ReloadService) {}

  ngOnInit(): void {
    this.getShopping();
    this.isLoggedIn = this.email !== '' && this.email !== '{}';
   // console.log(this.isLoggedIn);
  }

  getShopping() {
    this.products = JSON.parse(localStorage.getItem('courses') || '[]');
    this.total = this.products.reduce((acc: any, item: any) => acc + item.newPrice, 0);
  }

  checkout() {
    let fullname: string = this.fullName;
    fullname = fullname.trim(); // remove double space
    let firstname: string = fullname.substr(0, fullname.indexOf(' '));
    let lastname: string = fullname.substr(fullname.indexOf(' '), fullname.length);    
    let data = {
        user_first_name: firstname,
        user_last_name: lastname,
        address: localStorage.getItem('address'),
        city: localStorage.getItem('city'),
        email: localStorage.getItem('email'),
        total: this.total,
        courses: JSON.stringify(this.products),
        status: 0
    };
    this.sendPostRequest(data)
    .then(data => {
        console.log(data);/*
        if (data['message'] == "New record created successfully" && data['status'] == 200){
          this.transId = data['transId'];
          // Fill the form with data
          (document.getElementById('user_first_name') as HTMLInputElement).value = data.user_first_name;
          (document.getElementById('user_last_name') as HTMLInputElement).value = data.user_last_name;
          (document.getElementById('address') as HTMLInputElement).value = data.address;
          (document.getElementById('city') as HTMLInputElement).value = data.city;
          (document.getElementById('email') as HTMLInputElement).value = data.email;
          (document.getElementById('total') as HTMLInputElement).value = data.total;
          (document.getElementById('courses') as HTMLInputElement).value = data.courses;
          (document.getElementById('status') as HTMLInputElement).value = data.status;
          // Submit the form
          (document.getElementById('checkoutForm') as HTMLFormElement).submit();
      }
      */
    })
    .catch(error => console.log('There was an error!', error));
}

  deleteCourse(i: any) {
    console.log(i);
    this.products.splice(i, 1);
    localStorage.setItem('courses', JSON.stringify(this.products));
    this.getShopping(); // call the getShopping method to update the total
    this.reloadService.triggerReload(true);
  }
   async sendPostRequest(data: any) {
    const response = await fetch('http://localhost:3000/api.php/pay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

}


