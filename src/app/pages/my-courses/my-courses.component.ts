import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from 'src/app/shared/components/result/result.component';
import { ReloadService } from 'src/app/shared/services/reload.service';
import { ServicesService } from 'src/app/shared/services/services.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})

export class MyCoursesComponent implements OnInit {
  grid = true;
  result?: string = '';
  title?: string ='';
  email: string = 'adham@adhamfouad.cf'; //localStorage.getItem('email') || ''
  courses:any = [];
  constructor(private route: ActivatedRoute, private http: HttpClient, public dialog: MatDialog, private reloadService: ReloadService, private services: ServicesService, private router: Router) {} 
  ngOnInit(): void {
    this.getCourses({email: this.email}).then((data: any) => {
      this.courses = data;
      console.log(this.courses);
    }).catch((error: any) => {
      console.error('Error:', error);
    });
    console.log("email: " + this.email);
    this.route.queryParams.subscribe(params => {
      const resourcePath = params['resourcePath'];
      if (resourcePath) {
        this.getStatus(resourcePath).then(async responseData => {
          console.log(responseData);

          console.log("TRANS IDDDD: " + responseData.merchantTransactionId);
          console.log("CODE: " + responseData.result.code);
          //responseData.merchantTransactionId;
          if (responseData.result.code == "000.100.110"){
            this.title = "عملية ناجحة";
            this.result = "تم إضافة الدورة لحسابك";
            this.reloadService.triggerReload(true);
            
            let data  ={ id: responseData.merchantTransactionId};
            await this.sendPostRequest(data).then(data => {
              console.log(data)});
          
          }else{
            this.title= "عملية غير ناجحة";
            this.result = "حدث خطأ الرجاء المحاولة مرة اخرى"
          }
          this.openPopUp();
          console.log(`Payment status: ${this.result}`);
         
        });
      }
     // this.reloadService.triggerReload(true);
    });
  }

  async getStatus(resourcePath: string) {
    const url = `https://eu-test.oppwa.com${resourcePath}?entityId=8ac7a4c98a5dd899018a5f272d6500ef`;
    const headers = new HttpHeaders().set('Authorization', 'Bearer OGFjN2E0Yzk4YTVkZDg5OTAxOGE1ZjI1ZWY4NjAwZWJ8ZjR0cmdxc2g1Zg==');
  
    try {
      return this.http.get(url, { headers }).pipe(
        map((response: any) => {
          return response;  // or return response as needed
        })
      ).toPromise();
    } catch (error: any) {
      return error.message;
    }
  }
  async sendPostRequest(data: any) {
    const response = await fetch('http://localhost:3000/api.php/fpay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}
  async  getCourses(data:any){
    const response = await fetch('http://localhost:3000/api.php/my-courses', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
  }
  openPopUp() {
    if (this.title && this.result) {
      let dialogRef = this.dialog.open(ResultComponent, {
        data: { result: this.result, title: this.title, buttontxt: 'حسنا' }
      });
      dialogRef.afterClosed().subscribe(result => {
        localStorage.removeItem('courses');
        location.replace("/#/my-courses/");
        location.reload();
      });
    } else {
      console.error('Error: Title or result is undefined.');
    }
  }
  navigate(item: { id: any; }) {
    this.services.setPurchased(true, item.id.toString()); // set the boolean value
    this.router.navigate(['/course-details', item.id]);
  }
  getData() {
    return this.http.get('http://localhost:3000/api.php/courses');
  }
  selectCourse(e: any) {
    console.log(e.value);
  }
}

