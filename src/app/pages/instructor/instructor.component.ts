import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent {
  courses = [
    {
      img: "../../../../assets/images/card.jpg",
      title: "دورة الريفيت الانشائي",
      price: 200,
      newPrice: 100,
      student: 500,
      lessons: 0,
      category: "الرسم الهندسي"
    },
    {
      img: "../../../../assets/images/card1.jpg",
      title: "دورة الريفيت الانشائي",
      price: 200,
      newPrice: 100,
      student: 200,
      lessons: 3,
      category: "الرسم الهندسي"
    },
    {
      img: "../../../../assets/images/card.jpg",
      title: "دورة الريفيت الانشائي",
      price: 200,
      newPrice: 100,
      student: 20,
      lessons: 1,
      category: "الرسم الهندسي"
    },
    {
      img: "../../../../assets/images/card.jpg",
      title: "دورة الريفيت الانشائي",
      price: 200,
      newPrice: 100,
      student: 20,
      lessons: 1,
      category: "الرسم الهندسي"
    },
  ]
}
