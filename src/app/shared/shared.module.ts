import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsDirective } from '../core/directives/fonts.directive';
import { AddStudentErrorsComponent } from './errors/add-student-errors/add-student-errors.component';
import { MaterialModuleModule } from '../core/modules/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FullnamePipe } from '../core/pipes/fullname.pipe';
import { ComponentsModule } from './components/components.module';
import { AddStudentComponent } from './dialogs-modals/add-student/add-student.component';
import { ModifyStudentComponent } from './dialogs-modals/modify-student/modify-student.component';
import { RouterModule } from '@angular/router';
import { CourseDetailComponent } from './dialogs-modals/course-detail/course-detail.component';
import { Error404Module } from './errors/error404/error404.module';
import { AddCourseComponent } from './dialogs-modals/add-course/add-course.component';


@NgModule({
  declarations: [
    FontsDirective,
    AddStudentErrorsComponent,
    FullnamePipe,
    AddStudentComponent,
    AddCourseComponent,
    ModifyStudentComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
    Error404Module,
  ],
  exports: [
    FontsDirective,
    AddStudentErrorsComponent,
    MaterialModuleModule,
    FullnamePipe,
    ComponentsModule,
    AddStudentComponent,
    AddCourseComponent,
    ModifyStudentComponent,
    CourseDetailComponent
  ]
})
export class SharedModule { }
