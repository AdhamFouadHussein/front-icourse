import { Component } from '@angular/core';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.scss']
})
export class CourseCategoryComponent {
  grid = true;

  courses = [
    {
      img: "../../../../assets/images/card.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
    {
      img: "../../../../assets/images/card1.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
    {
      img: "../../../../assets/images/card.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
    {
      img: "../../../../assets/images/card1.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
    {
      img: "../../../../assets/images/card.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
    {
      img: "../../../../assets/images/card1.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
    {
      img: "../../../../assets/images/card.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
    {
      img: "../../../../assets/images/card1.jpg",
      logo: "../../../../assets/images/cardLogo.jpeg",
      name: "Alkhabir",
      title: "دورة الريفيت الانشائي",
      desc: "تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...",
      price: 200,
      newPrice: 100,
      sub: 2500
    },
  ]

  courseSelect = ["تم نشره حديثًا", "ترتيب ابجدي", "عدد الأعضاء الأكثر"];

  selectCourse(e: any) {
    console.log(e.value);
  }
}
