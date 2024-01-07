import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  shopp = new Subject();
  // _login = false;
  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // _isLogin() {
  //   const token = localStorage.getItem('token');
  //   this.http.get('localhost:3000/api.php/token/' + token).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this._login = true;
  //     }, error: (err) => {
  //       console.log(err);
  //       localStorage.removeItem('token');
  //       this.router.navigate(['/home']);
  //     }
  //   })
  // }

  login(userData: any) {
    return this.http.post('http://localhost:3000/login.php', userData);
  }

  register(userData: any) {
    return this.http.post('http://localhost:3000/register.php', userData);
  }
}
