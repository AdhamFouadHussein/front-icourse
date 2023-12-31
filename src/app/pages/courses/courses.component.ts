import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://alkhabir.co/api.php/courses');
  }
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [DataService]
})
export class CoursesComponent implements OnInit {
  grid = true;
  searchTerm: any;
  searchResult: any = [];
  courses: any = [];

  search(): void {
    this.searchResult = this.courses.filter(
      (item: any) => item.name === this.searchTerm
    );
    console.log(this.searchResult);

    const index = this.courses.find(
      (item: any) => item.name == this.searchTerm
    );
    // console.log(index);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.courses = data;
      console.log(data);
    });
  }

  courseSelect = ['تم نشره حديثًا', 'ترتيب ابجدي', 'عدد الأعضاء الأكثر'];

  selectCourse(e: any) {
    console.log(e.value);
  }
}
