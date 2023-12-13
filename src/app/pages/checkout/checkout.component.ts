// checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { CartInfo } from './CartInfo.model';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
interface ResponseObject {
  url: string;
  // other properties...
}


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  isLoading:boolean = false;
  products:any;
  total: any;
  __coupon = false;
  // Declare the properties for the component
  firstName: string = this.localStorageService.get('full_name'); 
  lastName: string = this.localStorageService.get('last_name'); 
  email: string = this.localStorageService.get('email'); 
  phoneNumber : string =  this.localStorageService.get('phone_number');
  cartItems: CartInfo[] = this.cartService.cartItems;
 // total: number = this.cartItems.total; // The total price of the products which needs to be reflected in the other file
  listCheckout = [
    // The array of payment methods
    { name: ' PAY MOB', img: 'https://www.paymob.com/en/images/paymobLogo.png' },
  ];

  // Declare the form group for the coupon input
  couponForm = new FormGroup({
    coupon: new FormControl('', Validators.required),
  });

  // Declare the form group for the checkout form
  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
  });

  // Inject the local storage service and the cart service
  constructor(
    private localStorageService: LocalStorageService,
    private cartService: CartService,
    private http: HttpClient
  ) {}
  sumPrices(total: any): number {
    return total.reduce((acc: any, item: any) => acc + item.newPrice, 0);
  }

  getShopping() {
    this.products = JSON.parse(localStorage.getItem('courses') ?? '');
    this.total = this.sumPrices(this.products);
  }
  // Get the user name, the cart items, and the total price from the services
  ngOnInit(): void {
    this.email = this.localStorageService.get('email') ?? 'Guest'; 
    this.cartItems = this.cartService.getCartItems();
    this.getShopping();
    //this.total = this.cartService.getCartTotal(); //t this need to be changed
  }

  // Submit the coupon form and apply the discount
  coupon() {
    console.log(this.couponForm.value);
    // TODO: implement the coupon logic
  }

  // Submit the checkout form and place the order
  checkout() {
    const url = 'http://alkhabeer.unaux.com/payment.php';
    const options = {
      headers: {
        'Content-Type': 'application/json', 
      },
      responseType: 'json' as 'json', 
    };
    const data = {
      ids:[1],
      email: 'adham@adhamfouad.com',
      firstName:'Adham',
      lastName:'Hussein',
      phone:'+201275836012',
    };
    this.isLoading = true;
    this.http.post<{ url: string }>(url, data, options).subscribe(
      (response) => {
        console.log(response.url); // log the response
        window.location.replace(response.url); // redirect to the url echoed by the server
      },
      (error) => {
        console.error('Error:', error); // log the error if any
      }
    );    
  //  console.log(this.checkoutForm.value);
    // TODO: implement the checkout logic
  }
}