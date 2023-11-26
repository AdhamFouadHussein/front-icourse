import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

export interface VideoDetail {
  id: number;
  videoName: string;
  videoUrl: string;
  duration: string;
  linkName: string;
  linkUrl: string;
  fileName: string;
  fileUrl: string;
}

export interface CourseData {
  lessons_list: string;
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData(id: String) {
    return this.http.get<CourseData[]>(`http://localhost:3000/api.php/courses/${id}`);
  }
}

@Component({
  selector: 'app-course-videos',
  templateUrl: './course-videos.component.html',
  styleUrls: ['./course-videos.component.scss'],
  providers: [DataService],
})
export class CourseVideosComponent implements OnInit {

 

    videoDetails: VideoDetail[] = [];
    curr_video_url: string = '';
    curr_video_name: string = '';
  
    constructor(public auth:AuthService, private dataService: DataService, private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id != null){
        this.dataService.getData(id).subscribe((data: CourseData[]) => {
          this.videoDetails = JSON.parse(data[0].lessons_list) as VideoDetail[];
          this.curr_video_url = this.videoDetails[0].videoUrl;
          this.curr_video_name = this.videoDetails[0].videoName;
        });
      }
      
    }
  
    setId(vid_id: any) {
      for (let video of this.videoDetails) {
        if (video.id === vid_id) {
          this.curr_video_url = video.videoUrl;
          this.curr_video_name = video.videoName;
          break;
        }
      }
      console.log(vid_id);
      console.log(this.curr_video_name);
    }
  }