import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/courses.model';
import { Inscripciones } from 'src/app/core/models/inscriptions.model';
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
  public inscription$: Observable<Inscripciones[]>;

  course$!: Observable<Course[]>;
  coursesSub!: Subscription;
  courses!: Course[];

  constructor(
    private courseService: CoursesService,
    private studentService: StudentsService,
    private dialog: MatDialogRef<AddInscriptionComponent>,
    private inscripciones: InscriptionsService,
    private readonly dialogRef: DialogRef
  ) {
    dialog.disableClose = true
  }

  ngOnInit(): void {
    this.getAlumnosList();
    this.getCursosList();
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

  // guardarInscripcion() {
  //   let idAlumno: number = Math.max.apply(null, this.alumnos.map(o => o.id));

  //   let incripcion: Inscripciones = {
  //     id: idAlumno + 1,
  //     student: this.formularioInscripcion.value.student,
  //     course: this.formularioInscripcion.value.course,
  //   }
  //   this.inscripciones.agregarInscripciones(incripcion).subscribe(() => this.router.navigate(['/inscriptions']));
  // }

  getAlumnosList() {
    this.student$ = this.studentService.getstudentsFromAPI();
    this.studentSubscription = this.student$.subscribe(
      (students: Student[]) => (this.students = students)
    );
  }

  getCursosList() {
    this.course$ = this.courseService.getCoursesFromAPI();
    this.coursesSub = this.course$.subscribe(
      (course: Course[]) => (this.courses = course)
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
