import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  paragraph =
    'AutoCAD هو تطبيق برمجي للتصميم بمساعدة الكمبيوتر (CAD) للتصميم والصياغة ثنائية وثلاثية الأبعاد. إنه أحد برامج CAD الأكثر شيوعًا في العالم، ويستخدمه المهندسون والمعماريون والمصممون وغيرهم من المتخصصين في مجموعة واسعة من الصناعات. فيما يلي بعض الأمثلة المحددة لكيفية استخدام AutoCAD في مجالات مختلفة: المهندسون المدنيون: يستخدم المهندسون المدنيون برنامج أوتوكاد لتصميم وصياغة الطرق والجسور والسدود ومشاريع البنية التحتية المدنية الأخرى. المهندسين الميكانيكيين: يستخدم المهندسون الميكانيكيون برنامج أوتوكاد لتصميم وصياغة الآلات والمحركات والمكونات الميكانيكية الأخرى. مهندسو الكهرباء: يستخدم مهندسو الكهرباء برنامج أوتوكاد لتصميم وصياغة الدوائر الكهربائية وشبكات الطاقة والأنظمة الكهربائية الأخرى. المهندسين المعماريين: يستخدم المهندسون المعماريون برنامج أوتوكاد لتصميم وصياغة المباني والهياكل الأخرى. المهندسين المعماريين: يستخدم المهندسون المعماريون برنامج أوتوكاد لإنشاء رسومات ونماذج تفصيلية لتصميماتهم للمباني والهياكل الأخرى. شركات البناء: تستخدم شركات البناء برنامج أوتوكاد لإنشاء رسومات ونماذج للمباني والهياكل الأخرى، ولتطوير الخطط وإدارة المشاريع. شركات التصنيع: تستخدم شركات التصنيع برنامج أوتوكاد لتصميم وصياغة المنتجات والأجزاء، ولتطوير تعليمات التصنيع وإدارة مراقبة الجودة. مصممو المنتجات: يستخدم مصممو المنتجات أوتوكاد لتصميم وصياغة المنتجات، مثل الأثاث والأجهزة والإلكترونيات. مصممو الديكور الداخلي: يستخدم مصممو الديكور الداخلي برنامج أوتوكاد لتصميم وصياغة تخطيط المساحات الداخلية، مثل المكاتب والمنازل والمطاعم. مهندسو المناظر الطبيعية: يستخدم مهندسو المناظر الطبيعية برنامج أوتوكاد لتصميم وصياغة تخطيط المساحات الخارجية، مثل المتنزهات والحدائق والملاعب. يعد AutoCAD أداة قوية ومتعددة الاستخدامات يمكن استخدامها في مجموعة واسعة من الصناعات والمجالات. إنها أداة أساسية للعديد من المحترفين، وهي مهارة قيمة يجب امتلاكها.   إذا كنت مهتمًا بتعلم برنامج AutoCAD، فهناك عدد من الموارد المتاحة لك. يمكنك العثور على كتب ومقالات ودورات عبر الإنترنت حول هذا الموضوع.';

  courses = [
    {
      img: '../../../../assets/images/card.jpg',
      logo: '../../../../assets/images/cardLogo.jpeg',
      name: 'Alkhabir',
      title: 'دورة الريفيت الانشائي',
      desc: 'تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...',
      price: 200,
      newPrice: 100,
      sub: 2500,
    },
    {
      img: '../../../../assets/images/card1.jpg',
      logo: '../../../../assets/images/cardLogo.jpeg',
      name: 'Alkhabir',
      title: 'دورة الريفيت الانشائي',
      desc: 'تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...',
      price: 200,
      newPrice: 100,
      sub: 2500,
    },
    {
      img: '../../../../assets/images/card.jpg',
      logo: '../../../../assets/images/cardLogo.jpeg',
      name: 'Alkhabir',
      title: 'دورة الريفيت الانشائي',
      desc: 'تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج الريفيت الذي يعتبر أحد أقوى...',
      price: 200,
      newPrice: 100,
      sub: 2500,
    },
  ];
}
