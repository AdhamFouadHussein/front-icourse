import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(userData: any) {
        return this.http.post('https://alkhabir.co/login.php', userData);
    }
}
