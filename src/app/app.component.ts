import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  textDir: any;
  lang: string = 'en'
  curentLang: any;

  constructor(private router: Router,
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document) {
    translate.addLangs(['en', 'ar']);
  }

  switchLanguage(lang: string) {
    if (lang === 'en') {
      this.textDir = 'ltr';
    } else {
      this.textDir = 'rtl';
    }
    this.translate.use(lang);
  }

  ngOnInit() {
    //Change Lang:
    this.curentLang = localStorage.getItem('curentLang') || 'en';
    this.translate.use(this.curentLang);
    if (this.curentLang == "en") {
      this.document.getElementsByTagName('html')[0].lang = 'en';
      this.document.getElementsByTagName('html')[0].dir = 'ltr';
      this.document.getElementById('Appcontainer')?.classList.remove('is-rtl');

    } else if (this.curentLang == "ar") {
      this.document.getElementsByTagName('html')[0].lang = 'ar';
      this.document.getElementsByTagName('html')[0].dir = 'rtl';
      this.document.getElementById('Appcontainer')?.classList.add('is-rtl');
    }

    //Scroll to top:
    window.scroll(0, 0);
  }
}
