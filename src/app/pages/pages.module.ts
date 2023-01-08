import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ModifyStudentComponent } from './modify-student/modify-student.component';
import { StudentsComponent } from './students/students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddStudentComponent,
    CoursesComponent,
    HomeComponent,
    ModifyStudentComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentsComponent,
    AddStudentComponent,
    CoursesComponent,
    HomeComponent,
    ModifyStudentComponent,
  ]
})
export class PagesModule { }
