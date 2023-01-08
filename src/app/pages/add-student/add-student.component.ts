import { Component, Inject } from '@angular/core';
import { AddStudentErrorsComponent } from '../../shared/errors/add-student-errors/add-student-errors.component';
import { FormGroup } from '@angular/forms';
import {
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/students.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {

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


  //prevenir close
  constructor(private readonly dialogRef: DialogRef, private dialog: MatDialogRef<AddStudentComponent>) {
    dialog.disableClose = true;
  }

  //close
  closeWindow() {
    this.dialogRef.close()
  }
}
