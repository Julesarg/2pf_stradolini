import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,

  ],
  exports: [
    StudentsComponent,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
