import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from 'src/app/shared/components/result/result.component';
import { ReloadService } from 'src/app/shared/services/reload.service';
import { Services } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})

export class MyCoursesComponent implements OnInit {
  
  grid = true;
  result?: string = '';
  title?: string ='';
  email: string = localStorage.getItem('email') || '';
  courses:any = [];
  constructor(private route: ActivatedRoute, private http: HttpClient, public dialog: MatDialog, private reloadService: ReloadService, private services: Services, private router: Router) {} 
  ngOnInit(): void {
    this.getCourses({email: this.email}).then((data: any) => {
      this.courses = data;
      console.log(this.courses);
    }).catch((error: any) => {
      console.error('Error:', error);
    });
    console.log("email: " + this.email);
    this.getCourses({email: this.email});
    this.route.queryParams.subscribe(params => {
      const resourcePath = params['resourcePath'];
      if (resourcePath) {
        this.getStatus(resourcePath).then(async responseData => {
          //console.log(responseData);
          //responseData.merchantTransactionId;
          if (responseData.result.code == "000.100.110"){
            this.title = "عملية ناجحة";
            this.result = "تم إضافة الدورة لحسابك";
            localStorage.removeItem('courses');
            this.reloadService.triggerReload(true);
           
          }else{
            this.title= "عملية غير ناجحة";
            this.result = "حدث خطأ الرجاء المحاولة مرة اخرى"
          }
          this.openPopUp();
          console.log(`Payment status: ${this.result}`);
          let data  ={ id: responseData.merchantTransactionId};
          await this.sendPostRequest(data)  .then(data => {
            console.log(data)});
        });
      }
      this.reloadService.triggerReload(true);
    });
  }

  async getStatus(resourcePath: string) {
    const url = `https://eu-test.oppwa.com${resourcePath}?entityId=8ac7a4c98a5dd899018a5f272d6500ef`;
    const headers = new HttpHeaders().set('Authorization', 'Bearer OGFjN2E0Yzk4YTVkZDg5OTAxOGE1ZjI1ZWY4NjAwZWJ8ZjR0cmdxc2g1Zg==');

    try {
      const response = await this.http.get(url, { headers }).toPromise();
    
   
      return response;
    } catch (error:any) {
      return error.message;
    }
    
  }
  async sendPostRequest(data: any) {
    const response = await fetch('https://alkhabir.co/api.php/fpay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}
  async  getCourses(data:any){
    const response = await fetch('https://alkhabir.co/api.php/my-courses', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
 // console.log(response.json());
  return await response.json();
  }
  openPopUp() {
    // Open the pop up card with ResultComponent as its content
   let dialogRef = this.dialog.open(ResultComponent, {
      // Pass the result as data to the pop up card
      data: { result: this.result , title: this.title, buttontxt: 'حسنا'}
    });
    dialogRef.afterClosed().subscribe(result => {
      localStorage.removeItem('courses');
      location.reload();
      location.replace("/#/my-courses/");
    });
  }
  navigate(item: { id: any; }) {
    this.services.setData(true); // set the boolean value
    this.router.navigate(['/course-details', item.id]);
  }
  getData() {
    return this.http.get('https://alkhabir.co/api.php/courses');
  }
  selectCourse(e: any) {
    console.log(e.value);
  }
}
