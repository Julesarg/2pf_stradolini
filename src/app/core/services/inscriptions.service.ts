import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, mergeMap, Observable, take, tap, throwError } from 'rxjs';
import { Inscripciones } from '../models/inscriptions.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {
  public inscriptions$: Observable<Inscripciones[]>;
  private inscriptions = new BehaviorSubject<Inscripciones[]>([]);

  private readonly baseURL = 'https://63e99b664f3c6aa6e7cf374e.mockapi.io';

  constructor(private httpClient: HttpClient) {

    this.inscriptions$ = this.inscriptions.asObservable();
    this.obtenerInscripciones().subscribe((student) => {
      this.inscriptions.next(student);
    });

  }

  obtenerInscripciones(): Observable<Inscripciones[]> {
    return this.httpClient.get<Inscripciones[]>(`${this.baseURL}/inscriptions`).pipe(catchError(this.manejoError))
  }

  // agregarInscripciones(inscripciones: Inscripciones): Observable<Inscripciones> {
  //   return this.httpClient.post<Inscripciones>(`${this.baseURL}/inscriptions`, inscripciones).pipe(catchError(this.manejoError))
  // }


  agregarInscripciones(inscription: Inscripciones) {
    this.inscriptions$
      .pipe(
        take(1),
        mergeMap((studentlist) =>
          this.httpClient
            .post<Inscripciones>(
              `${this.baseURL}/inscriptions`,
              inscription
            )
            .pipe(
              tap((addedStudent) =>
                this.inscriptions.next([...studentlist, addedStudent])
              )
            )
        ),
      )
      .subscribe()
  }



  eliminarInscripciones(inscripciones: Inscripciones): Observable<Inscripciones> {
    return this.httpClient.delete<Inscripciones>(`${this.baseURL}/inscriptions/${inscripciones.id}`).pipe(catchError(this.manejoError));
  }

  private manejoError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('error del aldo del cliente', error.error.message);
    } else {
      console.warn('error del aldo del servidor', error.error.message);
    }

    return throwError(() => new Error('error en la conmunicacion HTTP'));
  }

}
