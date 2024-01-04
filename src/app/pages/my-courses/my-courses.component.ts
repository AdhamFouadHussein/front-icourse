import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from 'src/app/shared/components/result/result.component';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})

export class MyCoursesComponent implements OnInit {
  result?: string = '';
  title?: string ='';
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
        this.getStatus(resourcePath).then(async responseData => {
          console.log(responseData);
          //responseData.merchantTransactionId;
          if (responseData.result.code == "000.100.110"){
            this.title = "عملية ناجحة";
            this.result = "تم إضافة الدورة لحسابك";
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

    return await response.json();
}
  openPopUp() {
    // Open the pop up card with ResultComponent as its content
    this.dialog.open(ResultComponent, {
      // Pass the result as data to the pop up card
      data: { result: this.result , title: this.title}
    });
  }
}
