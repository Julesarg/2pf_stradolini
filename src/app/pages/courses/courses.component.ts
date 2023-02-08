import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../core/models/courses.model';
import { CoursesService } from 'src/app/core/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  public hover: number
  public course$: Observable<Course[]>;

  displayedColumns = ['name', 'duration', 'price', 'modality', 'detailsIcon', 'deleteOption'];
  element: Course;

  constructor(
    private coursesService: CoursesService
  ) { }


  ngOnInit(): void {
    this.course$ = this.coursesService.courses$

  }

  viewCourseDetail(course: Course) {
    this.coursesService.viewCourseDetail(course)
  }

  //abrir modal
  clickOpenDialog(course: Course) {
    this.coursesService.openDialog(course)
  }

  //borrar estudiante
  clickDeleteCourse(course: Course) {
    this.coursesService.deleteCourse(course)
  }

  clickAddcourse(course: Course) {
    this.coursesService.addCourse(course)
  }

}