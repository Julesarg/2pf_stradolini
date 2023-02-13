import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/students.model';
import { Observable } from 'rxjs';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {
  public student$: Observable<Student[]>;
  element: Student;

  ngOnInit(): void {
    this.student$ = this.studentsService.students$
  }

  constructor(
    private readonly dialogRef: DialogRef,
    private dialog: MatDialogRef<AddStudentComponent>,
    private studentsService: StudentsService) {
    dialog.disableClose = true
  }

  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[a-zA-Z ]*'),
  ]);

  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
  ]);

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  genderControl = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    gender: this.genderControl,
  });

  //close
  closeWindow() {
    this.dialogRef.close()
  }
}

