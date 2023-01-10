import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/courses.model';
import { CourseDetailComponent } from 'src/app/shared/dialogs-modals/course-detail/course-detail.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

  courses: Course[] = [
    new Course(1, 'Curso1', '10 weeks', 4000, 'Remote', 'Open', true, 'detalles del curso', '../../../assets/images/logo.png'),
    new Course(2, 'Curso2', '10 weeks', 8000, 'face-to face', 'Open', true, 'detalles del curso', '../../../assets/images/logo.png'),
    new Course(3, 'Curso3', '10 weeks', 5500, 'face-to face', 'Open', true, 'detalles del curso', '../../../assets/images/logo.png'),
    new Course(4, 'Curso4', '10 weeks', 7000, 'face-to face', 'Closed', true, 'detalles del curso', '../../../assets/images/logo.png')]

  displayedColumns = ['id', 'name', 'duration', 'price', 'modality', 'detailsIcon']

  constructor(private readonly dialogService: MatDialog) { }

  viewCourseDetail(course: Course) {
    let dialog = this.dialogService.open(CourseDetailComponent, { data: course })

    dialog.afterClosed().subscribe((data) => { if (data) { this.courses = this.courses.map((element) => element.id === course.id ? { ...element, ...data } : element) } })
  }
}