import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { CardGridComponent } from './shared/components/card-grid/card-grid.component';

// pages
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CourseCategoryComponent } from './pages/course-category/course-category.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

// translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// google maps angular
import { GoogleMapsModule } from '@angular/google-maps';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from './shared/shared.module';
import { CourseVideosComponent } from './pages/course-videos/course-videos.component';
import { ChangePassComponent } from './pages/auth/change-pass/change-pass.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { ForgotPassComponent } from './pages/auth/forgot-pass/forgot-pass.component';
import { UpdatePassComponent } from './pages/auth/update-pass/update-pass.component';
import { VerificationComponent } from './pages/auth/verification/verification.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    // components
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardGridComponent,
    BannerComponent,

    // pages
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CourseCategoryComponent,
    InstructorComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    BlogDetailsComponent,
    CheckoutComponent,
    CourseVideosComponent,
    ChangePassComponent,
    MyCoursesComponent,
    ForgotPassComponent,
    UpdatePassComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    GoogleMapsModule,
    SharedModule,

    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
