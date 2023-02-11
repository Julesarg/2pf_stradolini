import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../core/models/courses.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from 'src/app/shared/dialogs-modals/add-course/add-course.component';
import { User } from 'src/app/core/models/users.model';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  public hover: number
  public course$: Observable<Course[]>;
  public user: Observable<User | null>;

  displayedColumns = ['img', 'name', 'inscriptions', 'duration', 'price', 'modality', 'deleteOption'];
  element: Course;

  constructor(
    private coursesService: CoursesService, public readonly authService: AuthService, private readonly dialogService: MatDialog
  ) { }


  ngOnInit(): void {
    this.course$ = this.coursesService.courses$
  }

  clickAddCourse() {
    const dialog = this.dialogService.open(AddCourseComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.coursesService.addCourse({
          id: data.id,
          img: data.img,
          name: data.name,
          inscriptions: data.inscriptions,
          duration: data.duration,
          price: data.price,
          modality: data.modality,
          deleteOption: true,
          detailsIcon: true,
          detailsText: data.detailsText
        })
      }
    })
  }

  viewCourseDetail(course: Course) {
    this.coursesService.viewCourseDetail(course)
  }

  //borrar estudiante
  clickDeleteCourse(course: Course) {
    this.coursesService.deleteCourse(course)
  }
}