import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    register(userData: any) {
        return this.http.post('http://localhost:3000/register.php', userData);
    }
}
