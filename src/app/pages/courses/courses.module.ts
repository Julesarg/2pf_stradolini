import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OpenCourseDirective } from 'src/app/core/directives/openCourse.directive';
import { ClosedCourseDirective } from '../../core/directives/closedCourse.directive';



@NgModule({
  declarations: [
    CoursesComponent,
    OpenCourseDirective,
    ClosedCourseDirective
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
  ],
  exports: [
    CoursesComponent,
    CoursesRoutingModule,
    OpenCourseDirective,
    ClosedCourseDirective,
  ]
})
export class CoursesModule { }
