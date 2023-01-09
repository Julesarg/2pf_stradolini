import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/courses.model';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

  courses: Course[] = [
    new Course(1, 'Curso1', '10 weeks', 4000, 'Remote', 'Open', true, 'detalles del curso'),
    new Course(2, 'Curso2', '10 weeks', 8000, 'face-to face', 'Open', true, 'detalles del curso'),
    new Course(3, 'Curso3', '10 weeks', 5500, 'face-to face', 'Open', true, 'detalles del curso'),
    new Course(4, 'Curso4', '10 weeks', 7000, 'face-to face', 'Closed', true, 'detalles del curso')]

  displayedColumns = ['id', 'name', 'duration', 'price', 'modality', 'inscriptions', 'detailsIcon']
}