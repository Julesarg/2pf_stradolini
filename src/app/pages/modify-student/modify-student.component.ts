import { Component, Inject } from '@angular/core';
import { AddStudentErrorsComponent } from '../../shared/errors/add-student-errors/add-student-errors.component';
import { FormGroup } from '@angular/forms';
import {
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/students.model';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.scss'],
})
export class ModifyStudentComponent {

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

  constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null) {
    if (data) {
      this.registerForm.patchValue(data)
    }
  }

  closeWindow() {
    this.dialogRef.close()
  }

}

