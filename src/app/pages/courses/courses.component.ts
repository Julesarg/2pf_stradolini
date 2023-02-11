import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../core/models/courses.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { User } from 'src/app/core/models/users.model';
import { SessionService } from 'src/app/core/services/session.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { authenticatedUserSelector } from 'src/app/store/authentication/authentication.selector';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  public hover: number
  public course$: Observable<Course[]>;
  public user: Observable<User | null>;

  displayedColumns = ['name', 'duration', 'price', 'modality', 'detailsIcon', 'deleteOption'];
  element: Course;

  constructor(
    private coursesService: CoursesService, private readonly sessionService: SessionService, public readonly authService: AuthService, private readonly store: Store<AppState>
  ) {

    this.user = this.store.select(authenticatedUserSelector)
  }


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