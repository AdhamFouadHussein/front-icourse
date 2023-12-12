// header.component.ts
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // import the Router service
import { Subscription } from 'rxjs'; // import the Subscription type
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  btnLang: Boolean;
  token!: boolean;
  logo!: string;
  courses: any = [];
  shopping = {
    products: [
      {
        img: '../../../../assets/images/card.jpg',
        title: 'مبادئ الأتوكاد',
        quantity: 1,
        newPrice: 250,
      }
    ],
    total: 500,
  };

  total: any;

  sumNumbers(courses: any): number {
    return courses.reduce((acc: any, item: any) => acc + item.newPrice, 0);
  }

  shoppSubscription!: Subscription// declare a subscription property

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService,
    private router: Router // inject the Router service
  ) {

    if (localStorage.getItem('token')) {
      this.token = true;
    }
    if (localStorage.getItem('curentLang') == 'ar') {
      this.btnLang = true;
    } else {
      this.btnLang = false;
    }
  }

  changeLanguage(lang: string) {
    localStorage.setItem('curentLang', lang);
    this.translate.use(lang);
    if (lang == 'en') {
      // location.reload();
      this.document.getElementsByTagName('html')[0].lang = 'en';
      this.document.getElementsByTagName('html')[0].dir = 'ltr';
      // this.document
      //   .getElementById('Appcontainer')
      //   ?.classList.remove('is-rtl');
      this.btnLang = false;
      // setTimeout(() => {
      //   this.document.getElementsByTagName('html')[0].lang = 'en';
      //   this.document.getElementsByTagName('html')[0].dir = 'ltr';
      //   this.document
      //     .getElementById('Appcontainer')
      //     ?.classList.remove('is-rtl');
      //   this.btnLang = false;
      // }, 1000);
    } else if (lang == 'ar') {
      // location.reload();
      this.document.getElementsByTagName('html')[0].lang = 'ar';
      this.document.getElementsByTagName('html')[0].dir = 'rtl';
      // this.document.getElementById('Appcontainer')?.classList.add('is-rtl');
      this.btnLang = true;
      // setTimeout(() => {
      //   this.document.getElementsByTagName('html')[0].lang = 'ar';
      //   this.document.getElementsByTagName('html')[0].dir = 'rtl';
      //   this.document.getElementById('Appcontainer')?.classList.add('is-rtl');
      //   this.btnLang = true;
      // }, 1000);
    }
  }

  // checkUser() {
  //   this.http.Get(Profile.getProfile, this.http.header).subscribe({
  //     next: (res) => {
  //       this.token = true;
  //     }, error: (err) => {
  //       this.token = false;
  //       this.router.navigate(['/home']);
  //     }
  //   })
  //   if (!localStorage.getItem('curentLang')) {
  //     localStorage.setItem('curentLang', 'en');
  //   }
  // }

  // getLogo() {
  //   this.http.Get(Setting.getSetting).subscribe({
  //     next: (res) => {
  //       this.logo = res.data.img;
  //     }, error: (err) => {
  //     }
  //   })
  // }

   logOut() {
     localStorage.clear();
     // location.href = '/login';
     this.router.navigate(['/login']); // use the Router service to navigate to the login route
  }

  // login() {
  //   localStorage.clear();
  //   this.router.navigate(['/login']);
  // }

  getShopping() {
    this.shopping.products = JSON.parse(localStorage.getItem('courses') ?? '');
    this.total = this.sumNumbers(this.shopping.products);
  }

  deleteCourse(i: any) {
    console.log(i);
    this.shopping.products.splice(i, 1);
    localStorage.setItem('courses', JSON.stringify(this.shopping.products));
    this.getShopping(); // call the getShopping method to update the total
  }

  ngOnInit(): void {
    this.shopping.products = this.courses;
    // this.auth.shopp.subscribe((res) => {
    //   this.courses = res;
    //   this.shopping.products = this.courses;
    //   this.total = this.sumNumbers(this.courses);
    // });
    this.shoppSubscription = this.auth.shopp.subscribe((res) => { // assign the subscription to the property
      this.courses = res;
      this.shopping.products = this.courses;
      this.total = this.sumNumbers(this.courses);
    });
    this.getShopping(); // call the getShopping method to get the products and the total from the localStorage
    //   this.checkUser();
    //   this.getLogo();
  }

  ngOnDestroy(): void {
    this.shoppSubscription.unsubscribe(); // unsubscribe from the observable when the component is destroyed
  }
}
