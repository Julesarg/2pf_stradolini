import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsDirective } from './directives/fonts.directive';
import { AddStudentErrorsComponent } from './errors/add-student-errors/add-student-errors.component';
import { MaterialModuleModule } from './modules/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FullnamePipe } from './pipes/fullname.pipe';
import { ComponentsModule } from './components/components.module';
import { Error404Component } from './errors/error404/error404.component';
import { AddStudentComponent } from './dialogs-modals/add-student/add-student.component';
import { ModifyStudentComponent } from './dialogs-modals/modify-student/modify-student.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FontsDirective,
    AddStudentErrorsComponent,
    FullnamePipe,
    Error404Component,
    AddStudentComponent,
    ModifyStudentComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    FontsDirective,
    AddStudentErrorsComponent,
    MaterialModuleModule,
    FullnamePipe,
    ComponentsModule,
    Error404Component,
    AddStudentComponent,
    ModifyStudentComponent
  ]
})
export class SharedModule { }
