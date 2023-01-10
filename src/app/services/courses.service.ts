import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Course } from '../models/courses.model';
import { CourseDetailComponent } from '../shared/dialogs-modals/course-detail/course-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public courses$: Observable<Course[]>;
  private courses = new BehaviorSubject<Course[]>([]);

  constructor(private readonly dialogService: MatDialog) {
    this.courses$ = this.courses.asObservable();
    this.getcoursesFromAPI().subscribe(prod => {
      this.courses.next(prod);
    });
  }

  getcoursesFromAPI(): Observable<Course[]> {
    return of([
      {
        id: 1,
        name: "Curso Numero 1",
        duration: "10 months",
        price: 4000,
        modality: "Face to face",
        inscriptions: "Open",
        detailsIcon: true,
        detailsText: "texto descriptivo",
        img: "../../../assets/images/logo.png"
      },
      {
        id: 2,
        name: "Curso Numero 2",
        duration: "5 months",
        price: 2000,
        modality: "Face to face",
        inscriptions: "Open",
        detailsIcon: true,
        detailsText: "texto descriptivo",
        img: "../../../assets/images/logo.png"
      },
      {
        id: 3,
        name: "Curso Numero 3",
        duration: "7months",
        price: 5500,
        modality: "Face to face",
        inscriptions: "Closed",
        detailsIcon: true,
        detailsText: "texto descriptivo",
        img: "../../../assets/images/logo.png"
      },
      {
        id: 4,
        name: "Curso Numero 4",
        duration: "3 months",
        price: 1500,
        modality: "Remote",
        inscriptions: "Open",
        detailsIcon: true,
        detailsText: "texto descriptivo",
        img: "../../../assets/images/logo.png"
      },
    ]);

  }

  viewCourseDetail(course: Course) {
    let dialog = this.dialogService.open(CourseDetailComponent, { data: course })
  }
}


