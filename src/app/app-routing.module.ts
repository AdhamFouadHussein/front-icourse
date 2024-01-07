import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { ProfileComponent } from './pages/profile/profile.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseCategoryComponent } from './pages/course-category/course-category.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CourseVideosComponent } from './pages/course-videos/course-videos.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePassComponent } from './pages/auth/change-pass/change-pass.component';
import { UpdatePassComponent } from './pages/auth/update-pass/update-pass.component';
import { VerificationComponent } from './pages/auth/verification/verification.component';
import { ForgotPassComponent } from './pages/auth/forgot-pass/forgot-pass.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { CourseGuard } from './course.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePassComponent },
  { path: 'forgot-password', component: ForgotPassComponent },
  { path: 'update-password', component: UpdatePassComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'course-category', component: CourseCategoryComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'course-videos/:id', canActivate: [CourseGuard], component: CourseVideosComponent },
  { path: 'instructor', component: InstructorComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
