import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/models/courses.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  public course$: Observable<Course[]>;
  element: Course;


  constructor(private readonly dialogRef: DialogRef, private dialog: MatDialogRef<AddCourseComponent>, private coursesService: CoursesService) {
    dialog.disableClose = true;
  }

  //ok
  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  //ok
  priceControl = new FormControl('', [
    Validators.required,
  ]);
  //ok
  modalityControl = new FormControl('', [
    Validators.required,
  ]);
  //ok
  inscriptionsControl = new FormControl('', [
    Validators.required,
  ]);
  //ok
  durationControl = new FormControl('', [
    Validators.required,
  ]);

  //ok
  detailsTextControl = new FormControl('', [
    Validators.required,
    Validators.minLength(20),
  ]);

  //ok
  imgControl = new FormControl('', [
    Validators.required,
  ])


  registerCourse = new FormGroup({
    name: this.nameControl,
    price: this.priceControl,
    modality: this.modalityControl,
    inscriptions: this.inscriptionsControl,
    duration: this.durationControl,
    detailsText: this.detailsTextControl,
    img: this.imgControl
  });

  clickAddCourse(course: Course) {
    this.coursesService.addCourse(course)
  }

  //close
  closeWindow() {
    this.dialogRef.close()
  }
}