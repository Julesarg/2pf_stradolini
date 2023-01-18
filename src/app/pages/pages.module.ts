import { NgModule, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/core/modules/material-module.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { StudentsComponent } from './students/students.component';
import { UsersComponent } from './users/users.component';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';




@NgModule({
  declarations: [
    AuthenticationComponent,
    HomeComponent,
    InscriptionsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModuleModule,
  ],
  exports: [
    RouterModule,
    AuthenticationComponent,
    HomeComponent,
    InscriptionsComponent,
    UsersComponent
  ]
})
export class PagesModule { }
