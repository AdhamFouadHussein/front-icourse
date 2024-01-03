import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from 'src/app/shared/components/result/result.component';

interface Response  {
  description: string;
  // other properties
}
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})

export class MyCoursesComponent implements OnInit {
  result?: string = '';
  courses = [
    {
      id: 1,
      img: '../../../../assets/images/card.jpg',
      logo: '../../../../assets/images/cardLogo.jpeg',
      name: 'Alkhabir1',
      title: 'دورة الريفيت الانشائي',
      desc: 'تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...',
      price: 100,
      newPrice: 100,
      sub: 2500,
    },
  
  ];
  constructor(private route: ActivatedRoute, private http: HttpClient, public dialog: MatDialog) {} // Inject the MatDialog service
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const resourcePath = params['resourcePath'];
      if (resourcePath) {
        this.getStatus(resourcePath).then(responseData => {
          this.result = responseData.result.description;
          this.openPopUp();
          console.log(`Payment status: ${this.result}`);
        });
      }
    });
  }

  async getStatus(resourcePath: string) {
    const url = `https://eu-test.oppwa.com${resourcePath}?entityId=`;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ');

    try {
      const response = await this.http.get(url, { headers }).toPromise();
    
   
      return response;
    } catch (error:any) {
      return error.message;
    }
    
  }
  openPopUp() {
    // Open the pop up card with ResultComponent as its content
    this.dialog.open(ResultComponent, {
      // Pass the result as data to the pop up card
      data: { result: this.result }
    });
  }
}
