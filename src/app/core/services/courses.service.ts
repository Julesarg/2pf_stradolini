import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, mergeMap, Observable, of, take, tap } from 'rxjs';
import { Course } from '../models/courses.model';
import { CourseDetailComponent } from '../../shared/dialogs-modals/course-detail/course-detail.component';
import { HttpClient } from '@angular/common/http';
import { AddCourseComponent } from 'src/app/shared/dialogs-modals/add-course/add-course.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses$: Observable<Course[]>;
  private courses = new BehaviorSubject<Course[]>([]);
  private readonly baseURL = 'https://63c49434f0028bf85faa17cd.mockapi.io'

  constructor(private readonly dialogService: MatDialog, private httpClient: HttpClient) {
    this.courses$ = this.courses.asObservable();
    this.getCoursesFromAPI().subscribe(course => {
      this.courses.next(course);
    });
  }

  getCoursesFromAPI(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.baseURL}/courses`)
  }


  ////funciones//////////

  //agregar curso
  // addCourse(newCourseData: Omit<Course, 'id' | 'active'>): void {
  //   this.courses.pipe(take(1)).subscribe((courses) => {
  //     const lastId = courses[courses.length - 1]?.id || 0;
  //     this.courses.next([
  //       ...courses,
  //       new Course(lastId + 1, newCourseData.name, newCourseData.duration, newCourseData.price, newCourseData.modality, newCourseData.inscriptions, newCourseData.detailsIcon, newCourseData.detailsText, newCourseData.deleteOption, newCourseData.img)
  //     ])
  //   })
  // }


  addCourse(course: Course) {
    this.courses$
      .pipe(
        take(1),
        mergeMap((courseList) =>
          this.httpClient
            .post<Course>(
              'https://63c49434f0028bf85faa17cd.mockapi.io/courses',
              course
            )
            .pipe(
              tap((addedCourse) =>
                this.courses.next([...courseList, addedCourse])
              )
            )
        ),
      )
      .subscribe()
  }


  //borrar curso
  deleteCourse(course: Course) {
    this.httpClient
      .delete(
        `https://63c49434f0028bf85faa17cd.mockapi.io/courses/${course.id}`
      )
      .subscribe(
        (_) => {
          let newCourseList = this.courses
            .getValue()
            .filter((data) => data.id !== course.id);
          this.courses.next(newCourseList);
        },
        (_) => {
          console.warn('Error message');
        }
      );
  }

  viewCourseDetail(course: Course) {
    let dialog = this.dialogService.open(CourseDetailComponent, { data: course })
  }
}

