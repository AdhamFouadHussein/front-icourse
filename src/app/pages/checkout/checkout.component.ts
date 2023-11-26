import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  products: any;
  total: any;
  _coupon = false;

  listCheckout = [
    { name: ' Tabby', img: '../../../assets/images/hyper.png' },
    { name: ' Credit Card', img: '../../../assets/images/VISA-logo.svg' },
    { name: ' بطاقة مدى البنكية', img: '../../../assets/images/MADA-logo.svg' },
  ];

  checkoutForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9]+'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  couponForm = new FormGroup({
    coupon: new FormControl('', Validators.required),
  });

  coupon() {
    console.log(this.couponForm.value);
  }

  checkout() {
    console.log(this.checkoutForm.value);
  }

  constructor() {}

  sumPrices(total: any): number {
    return total.reduce((acc: any, item: any) => acc + item.price, 0);
  }

  getShopping() {
    this.products = JSON.parse(localStorage.getItem('courses') ?? '');
    this.total = this.sumPrices(this.products);
  }

  ngOnInit(): void {
    this.getShopping();
  }
}
