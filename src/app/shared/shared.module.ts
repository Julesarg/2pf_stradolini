import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsDirective } from '../core/directives/fonts.directive';
import { AddStudentErrorsComponent } from './errors/add-student-errors/add-student-errors.component';
import { MaterialModuleModule } from '../core/modules/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FullnamePipe } from '../core/pipes/fullname.pipe';
import { ComponentsModule } from './components/components.module';
import { Error404Component } from './errors/error404/error404.component';
import { AddStudentComponent } from './dialogs-modals/add-student/add-student.component';
import { ModifyStudentComponent } from './dialogs-modals/modify-student/modify-student.component';
import { RouterModule } from '@angular/router';
import { CourseDetailComponent } from './dialogs-modals/course-detail/course-detail.component';



@NgModule({
  declarations: [
    FontsDirective,
    AddStudentErrorsComponent,
    FullnamePipe,
    Error404Component,
    AddStudentComponent,
    ModifyStudentComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    FontsDirective,
    AddStudentErrorsComponent,
    MaterialModuleModule,
    FullnamePipe,
    ComponentsModule,
    Error404Component,
    AddStudentComponent,
    ModifyStudentComponent,
    CourseDetailComponent
  ]
})
export class SharedModule { }
