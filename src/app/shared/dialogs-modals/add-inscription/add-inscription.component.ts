import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/courses.model';
import { Inscription } from 'src/app/core/models/inscriptions.model';
import { Student } from 'src/app/core/models/students.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { StudentsService } from '../../../core/services/students.service';
import { InscriptionsService } from '../../../core/services/inscriptions.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrls: ['./add-inscription.component.scss']
})
export class AddInscriptionComponent implements OnInit, OnDestroy {

  student!: Student;
  students!: Student[];
  studentSubscription!: Subscription;
  student$!: Observable<Student[]>;
  course$!: Observable<Course[]>;
  coursesSub!: Subscription;
  courses!: Course[];

  public inscription$: Observable<Inscription[]>;

  constructor(
    private courseService: CoursesService,
    private studentService: StudentsService,
    private dialog: MatDialogRef<AddInscriptionComponent>,
    private inscripciones: InscriptionsService,
    private readonly dialogRef: DialogRef) {
    dialog.disableClose = true
  }

  ngOnInit(): void {
    this.getStudentsList();
    this.getCoursesList();
    this.inscription$ = this.inscripciones.inscriptions$
  }

  formularioInscripcion = new FormGroup({
    student: new FormGroup({
      name: new FormControl('', []),
      lastName: new FormControl('', [])
    }),
    course: new FormGroup({
      name: new FormControl('', []),
    }),
  });

  getStudentsList() {
    this.student$ = this.studentService.getstudentsFromAPI();
    this.studentSubscription = this.student$.subscribe(
      (students: Student[]) => (this.students = students)
    );
  }

  getCoursesList() {
    this.course$ = this.courseService.getCoursesFromAPI();
    this.coursesSub = this.course$.subscribe(
      (course: Course[]) => (this.courses
        = course)
    );
  }

  ngOnDestroy() {
    this.studentSubscription.unsubscribe();
    this.coursesSub.unsubscribe();
  }

  closeWindow() {
    this.dialogRef.close()
  }
}