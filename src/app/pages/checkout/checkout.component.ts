import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  firstName: string = localStorage.getItem('full_name') || '';
  lastName: string = localStorage.getItem('last_name') || '';
  email: string = localStorage.getItem('email') || '';
  phoneNumber: string = localStorage.getItem('phone_number') || '';
  listCheckout = [
    // The array of payment methods
    { name: ' HYPER PAY', img: 'https://www.hyperpay.com/wp-content/uploads/2022/10/Hyperpay-logo-svg-1.png' },
  ];

  constructor(public auth: AuthService, private route: ActivatedRoute, private http: HttpClient) {}

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
    window.location.href = 'https://alkhabir.co/pay.php?total=' + encodeURIComponent(this.total);
  }
  deleteCourse(i: any) {
    console.log(i);
    this.products.splice(i, 1);
    localStorage.setItem('courses', JSON.stringify(this.products));
    this.getShopping(); // call the getShopping method to update the total
  }
}
