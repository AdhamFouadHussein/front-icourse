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

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(id: String) {
    return this.http.get(`http://localhost:3000/api.php/courses/${id}`);
  }
}

export interface VideoDetail {
  videoName: string;
  videoTitle: string;
}
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  providers: [DataService]
})

export class CourseDetailsComponent implements OnInit {
  panelOpenState = true;

  recommended: any = [];
  course: any; // This object will be populated with data from the API
  courses: any = [];
  courseVideo: any = [];
  videoDetails: VideoDetail[] = [];
  curr_video_title: string = '';
  curr_video_name: string = '';
  constructor(public auth: AuthService, private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.dataService.getData(id).subscribe((data: any) => {
        this.course = data[0];
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

        // Push the course to the 'recommended' array
        this.recommended.push(this.course);
      });
    }
  }
  addToCart() {
    // Get the existing courses from local storage
    let storedCourses = localStorage.getItem('courses');
    let existingCourses = storedCourses ? JSON.parse(storedCourses) : [];    
    // Add the current course to the array
    existingCourses.push(this.course);
    // Update the BehaviorSubject and local storage
    this.auth.shopp.next(existingCourses);
    localStorage.setItem('courses', JSON.stringify(existingCourses));
  }

}