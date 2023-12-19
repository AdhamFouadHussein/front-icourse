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
    { name: ' PAY MOB', img: 'https://www.paymob.com/en/images/paymobLogo.png' },
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
    const ids = this.products.map((course: { id: any; }) => course.id);
    const url = 'http://alkhabir.co/payment.php';
    const options = {
      headers: {
        'Content-Type': 'application/json', 
      },
      responseType: 'json' as 'json', 
    };
    const data = {
      ids: ids,
      email: this.email,
      firstName: this.firstName,
      lastName: "‎ ",
      phone: this.phoneNumber,
    };
    this.isLoading = true;
    this.http.post<{ url: string }>(url, data, options).subscribe(
      (response) => {
        console.log(response.url);
        window.location.replace(response.url);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );    
  }
}
