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

@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrls: ['./add-inscription.component.scss']
})
export class AddInscriptionComponent implements OnInit, OnDestroy {

  formularioInscripcion: FormGroup;

  alumno!: Student;
  alumnos!: Student[];
  alumnoSubscription!: Subscription;
  alumno$!: Observable<Student[]>;

  curso$!: Observable<Course[]>;
  cursosSub!: Subscription;
  cursos!: Course[];

  constructor(
    private router: Router,
    private cursoService: CoursesService,
    private alumnoService: StudentsService,
    private inscripciones: InscriptionsService
  ) { }

  getAlumnosList() {
    this.alumno$ = this.alumnoService.getstudentsFromAPI();
    this.alumnoSubscription = this.alumno$.subscribe(
      (alumnos: Student[]) => (this.alumnos = alumnos)
    );
  }

  getCursosList() {
    this.curso$ = this.cursoService.getCoursesFromAPI();
    this.cursosSub = this.curso$.subscribe(
      (curso: Course[]) => (this.cursos = curso)
    );
  }

  ngOnInit(): void {
    this.getAlumnosList();
    this.getCursosList();
    this.formularioInscripcion = new FormGroup({
      alumno: new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required])
      }),
      curso: new FormGroup({
        nombreCurso: new FormControl('', [Validators.required]),
      }),
    });
  }

  guardarInscripcion() {
    let idAlumno: number = Math.max.apply(null, this.alumnos.map(o => o.id));

    let incripcion: Inscripciones = {
      id: idAlumno + 1,
      alumno: this.formularioInscripcion.value.alumno,
      curso: this.formularioInscripcion.value.curso,
    }
    this.inscripciones.agregarInscripciones(incripcion).subscribe(() => this.router.navigate(['/inscriptions']));
  }

  ngOnDestroy() {
    this.alumnoSubscription.unsubscribe();
    this.cursosSub.unsubscribe();
  }
}
