import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/courses.model';
import { Observable } from 'rxjs';
import { CoursesService } from '../../core/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  public courses$: Observable<Course[]>;

  displayedColumns = ['name', 'duration', 'price', 'modality', 'detailsIcon']

  constructor(
    private coursesService: CoursesService
  ) { }


  ngOnInit(): void {
    this.courses$ = this.coursesService.courses$
  }

  viewCourseDetail(course: Course) {
    this.coursesService.viewCourseDetail(course)
  }
}