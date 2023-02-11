import { Component, Inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/core/models/courses.model';


@Component({
  selector: 'app-modify-student',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {

  constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Course | any) { }

  closeWindow() {
    this.dialogRef.close()
  }


}
