import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/students.model';
import { Observable } from 'rxjs';
import { AddStudentService } from 'src/app/core/services/add-student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  public student$: Observable<Student[]>;
  element: Student;


  constructor(private readonly dialogRef: DialogRef, private dialog: MatDialogRef<AddStudentComponent>, private addStudentService: AddStudentService) {
    dialog.disableClose = true;
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

  ngOnInit(): void {
    this.student$ = this.addStudentService.students$
  }

  clickAddStudent(student: Student) {
    this.addStudentService.addStudent(student)
  }

  //close
  closeWindow() {
    this.dialogRef.close()
  }
}