import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsDirective } from './directives/fonts.directive';
import { AddStudentErrorsComponent } from './errors/add-student-errors/add-student-errors.component';
import { MaterialModuleModule } from './modules/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FullnamePipe } from './pipes/fullname.pipe';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    FontsDirective,
    AddStudentErrorsComponent,
    FullnamePipe
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    FontsDirective,
    AddStudentErrorsComponent,
    MaterialModuleModule,
    FullnamePipe,
    ComponentsModule
  ]
})
export class SharedModule { }
