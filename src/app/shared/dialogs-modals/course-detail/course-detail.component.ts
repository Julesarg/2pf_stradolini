import { Component, Inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/courses.model';


@Component({
  selector: 'app-modify-student',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  courses: any;

  constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Course | any) { }
  viewCourseDetail(course: Course) {
    let dialog = this.data.open(CourseDetailComponent, { data: course })

    dialog.afterClosed().subscribe((data: any) => { if (data) { this.courses = this.courses.map((element: { id: number; }) => element.id === course.id ? { ...element, ...data } : element) } })
  }

  closeWindow() {
    this.dialogRef.close()
  }
}

