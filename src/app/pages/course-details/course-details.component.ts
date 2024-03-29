import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  Injectable,
  OnInit
} from '@angular/core';
import {
  AuthService
} from 'src/app/shared/services/auth.service';
import {
  ActivatedRoute
} from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from 'src/app/shared/components/result/result.component';
import { ServicesService } from 'src/app/shared/services/services.service';
import { PreviewComponent } from 'src/app/shared/components/preview/preview.component';
@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(id: String) {
    return this.http.get(`http://localhost:3000/api.php/courses/${id}`);
  }
  getAllData() {
    return this.http.get('http://localhost:3000/api.php/courses');
  }
  
}

export interface VideoDetail {
  videoName: string;
  videoTitle: string;
  videoUrl:string;
}
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  providers: [DataService],
  template: `
  <div [innerHTML]="descr"></div>
`,
})

export class CourseDetailsComponent implements OnInit {

  title!: string;
  result!: string;
  descr: SafeHtml = "<span>Loading</span>";
  longdescr: SafeHtml= "<span>Loading</span>";
  panelOpenState = true;
  recommended: any = [];
  course: any; // This object will be populated with data from the API
  courses: any;
  courseVideo: any = [];
  videoDetails: VideoDetail[] = [];
  curr_video_title: string = '';
  curr_video_name: string = '';
  purchased:boolean = false;
  urls:any;
  constructor(public auth: AuthService,public dialog: MatDialog, private dataService: DataService, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private servicesService: ServicesService) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    let email = localStorage.getItem('email') || '';
    if(email != ''){
      this.servicesService.getPaidCourses(email).subscribe(courses => {
        this.servicesService.setPurchased(true, courses.map((course: { id: any; }) => String(course.id)));
        console.log(this.servicesService.getCourseIds());
        this.purchased = this.servicesService.hasPurchased(id!.toString());
        console.log(this.purchased);
      });
    }
    if (id != null) {
      this.dataService.getData(id).subscribe((data: any) => {
        this.course = data[0];
        this.descr = this._sanitizer.bypassSecurityTrustHtml(this.course.descr);
        this.longdescr = this._sanitizer.bypassSecurityTrustHtml(this.course.longdescr);
        this.videoDetails = JSON.parse(data[0].lessons_list) as VideoDetail[];
        this.courseVideo = [];
        for (let i = 0; i < this.videoDetails.length; i++) {
          let videoObj = {
            title: this.videoDetails[i].videoTitle,
            name: this.videoDetails[i].videoName
          };
          this.courseVideo.push(videoObj);
        }


        switch (this.course.lang) {
          case '1':
            this.course.lang = "انجليزي";
            break;
          case '0':
            this.course.lang = "عربي";
            break;
          default:
            this.course.lang = "عربي";
            break;
        }
        //TODO: Write a switch case for level ...
        
      
        
      });
      this.dataService.getAllData().subscribe((data: any) => {
        this.courses = data;
        // Push the course to the 'recommended' array
       // Filter out the course with the same id as the currently opened course
        const filteredCourses = this.courses.flat().filter((course: { id: string; }) => course.id !== id);
        // Shuffle the array
        filteredCourses.sort(() => Math.random() - 0.5);
        // Get the first 3 courses
        const randomCourses = filteredCourses.slice(0, 3);
        // Push all random courses to the 'recommended' array
        this.recommended.push(...randomCourses);
            });
    }
   
 
  }
  openPopUp() {
    // Open the pop up card with ResultComponent as its content
   let dialogRef = this.dialog.open(ResultComponent, {
      // Pass the result as data to the pop up card
      data: { result: this.result , title: this.title, buttontxt:"عربة التسوق"}
    });
    dialogRef.afterClosed().subscribe(result => {
    //  location.reload();
    });
  }
  openPreview(){
    this.urls = [ this.videoDetails[0].videoUrl];
    let dialogRef = this.dialog.open(PreviewComponent, {
      // Pass the result as data to the pop up card
      data: { urls: this.urls , title: this.course.title }
    });
    dialogRef.afterClosed().subscribe(result => {
    //  location.reload();
    });
  }
  addToCart() {
    // Get the existing courses from local storage
    let storedCourses = localStorage.getItem('courses');
    let existingCourses = storedCourses ? JSON.parse(storedCourses) : [];    

    // Check if the course already exists in the array
    let courseExists = existingCourses.some((existingCourse: { id: any; }) => existingCourse.id === this.course.id);

    if (courseExists) {
        // If the course already exists, show an alert
        alert('تم إضافته من قبل');
    } else {
        // If the course doesn't exist, add it to the array
        existingCourses.push(this.course);
        // Update the BehaviorSubject and local storage
        this.auth.shopp.next(existingCourses);
        localStorage.setItem('courses', JSON.stringify(existingCourses));
        this.title = 'تم الإضافة الى سلتك';
        this.result = 'لقد قمت بإضافة الدورة الى عربة التسوق الخاصة بك.'
        this.openPopUp();
    }
}


}