import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Inscripciones } from 'src/app/core/models/inscriptions.model';
import { User } from 'src/app/core/models/users.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { SessionService } from 'src/app/core/services/session.service';
import { AddCourseComponent } from 'src/app/shared/dialogs-modals/add-course/add-course.component';
import { AppState } from 'src/app/store/app.reducer';
import { authenticatedUserSelector } from 'src/app/store/authentication/authentication.selector';
import { InscriptionsService } from '../../core/services/inscriptions.service';
import { AddInscriptionComponent } from '../../shared/dialogs-modals/add-inscription/add-inscription.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [
    'id',
    'student',
    'course',
    'eliminar'
  ];

  dataSource: MatTableDataSource<Inscripciones>

  inscripciones: Inscripciones[];
  InscripcionesSubs: Subscription;
  inscripcion$: Observable<Inscripciones[]>
  public user: Observable<User | null>;

  // sesion$: Observable<Sesion>;
  // subscription: Subscription;
  // sesion: Sesion;

  constructor(
    private inscripcioneServices: InscriptionsService,
    private sesionService: SessionService,
    private readonly dialogService: MatDialog,
    private InscriptionsService: InscriptionsService,
    private readonly store: Store<AppState>
  ) {
    this.user = this.store.select(authenticatedUserSelector)
  }

  ngOnInit(): void {
    this.inscripcion$ = this.inscripcioneServices.obtenerInscripciones();
    this.InscripcionesSubs = this.inscripcion$.subscribe((inscripcion: Inscripciones[]) => {
      this.inscripciones = inscripcion
    })

    // this.sesion$ = this.sesionService.obtenerDatosSesion();
    // this.subscription = this.sesion$.subscribe(
    //   (sesion: Sesion) => (this.sesion = sesion));

    this.dataSource = new MatTableDataSource<Inscripciones>(this.inscripciones)
  }

  ngOnDestroy(): void {
    this.InscripcionesSubs.unsubscribe();
    // this.subscription.unsubscribe();
  }

  eliminarInscripcion(elemento: Inscripciones) {
    this.inscripcioneServices.eliminarInscripciones(elemento).subscribe(() => {
      this.inscripcion$ = this.inscripcioneServices.obtenerInscripciones();
    })
  }

  clickAddInscription() {
    const dialog = this.dialogService.open(AddInscriptionComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.InscriptionsService.agregarInscripciones({
          id: data.id,
          student: data.student,
          course: data.course
        })
      }
    })
  }

}
