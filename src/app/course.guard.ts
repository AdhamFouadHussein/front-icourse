import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { ServicesService } from './shared/services/services.service';


@Injectable({
  providedIn: 'root'
})
export class CourseGuard implements CanActivate {
  // Declare the course_ids property
  course_ids: string[] = [];
  constructor(private auth: AuthService, private services: ServicesService, private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Get the course id from the route parameter
    let id = route.paramMap.get('id') || '';
    // Check if the user is logged in and has purchased the course
    if (this.auth.isLoggedIn() && this.services.hasPurchased(id)) { // Use isLoggedIn method
      // Allow the navigation
      return true;
    } else {
      // Deny the navigation and redirect to the login page
      return this.router.createUrlTree(['/login']);
    }
  }
  
}