import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationComponent } from '../pages/authentication/authentication.component';
import { UsersComponent } from './users/users.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesComponent,
    HomeComponent,
    StudentsComponent,
    AuthenticationComponent,
    UsersComponent,
    InscriptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    StudentsComponent,
    CoursesComponent,
    HomeComponent,
    AuthenticationComponent,
    UsersComponent,
    InscriptionsComponent
  ]
})
export class PagesModule { }
