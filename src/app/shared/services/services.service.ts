import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseGuard } from 'src/app/course.guard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = 'http://localhost:3000/api.php//my-courses';
  purshased: boolean = false;
  course_ids: string[] = [];

  constructor(private http: HttpClient, private injector: Injector) { }

  getPaidCourses(email: string): Observable<any> {
    let data = { email: email };
    return this.http.post<any>(this.url, data);
  }

  hasPurchased(id: string): boolean {
    return this.purshased && this.course_ids.includes(id);
  }

  setPurchased(value: boolean, ids: string[]): void {
    this.purshased = value;
    this.course_ids = ids;
  }

  getPurchased(): boolean {
    return this.purshased;
  }

  getCourseIds(): string[] {
    return this.course_ids;
  }
}
