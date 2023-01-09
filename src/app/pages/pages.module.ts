import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationComponent } from '../pages/authentication/authentication.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    CoursesComponent,
    HomeComponent,
    StudentsComponent,
    AuthenticationComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentsComponent,
    CoursesComponent,
    HomeComponent,
    AuthenticationComponent,
    UsersComponent
  ]
})
export class PagesModule { }
