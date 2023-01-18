import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Course } from '../models/courses.model';
import { CourseDetailComponent } from '../../shared/dialogs-modals/course-detail/course-detail.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public courses$: Observable<Course[]>;
  private courses = new BehaviorSubject<Course[]>([]);

  constructor(private readonly dialogService: MatDialog, private httpClient: HttpClient) {
    this.courses$ = this.courses.asObservable();
    this.getCoursesFromAPI().subscribe(course => {
      this.courses.next(course);
    });
  }

  getCoursesFromAPI(): Observable<Course[]> {

    return this.httpClient.get<Course[]>('https://63c49434f0028bf85faa17cd.mockapi.io/courses');
  }

  viewCourseDetail(course: Course) {
    let dialog = this.dialogService.open(CourseDetailComponent, { data: course })
  }
}