import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CleanLayoutComponent } from './layouts/clean-layout/clean-layout.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { Error404Component } from './shared/errors/error404/error404.component';
import { UsersComponent } from './pages/users/users.component';
import { CourseDetailComponent } from './shared/dialogs-modals/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'students', component: StudentsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CourseDetailComponent },
      { path: 'users', component: UsersComponent }
    ]
  },
  {
    path: 'auth', component: CleanLayoutComponent,
    children: [
      { path: 'login', component: AuthenticationComponent },
      { path: '**', component: Error404Component }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
