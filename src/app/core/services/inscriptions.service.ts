import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Inscripciones } from '../models/inscriptions.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {
  private apiURL = 'https://mockapi.io/projects/63c49434f0028bf85faa17ce/';
  constructor(
    private http: HttpClient
  ) { }

  obtenerInscripciones(): Observable<Inscripciones[]> {
    return this.http.get<Inscripciones[]>(`${this.apiURL}/inscriptions`).pipe(catchError(this.manejoError))
  }

  agregarInscripciones(inscripciones: Inscripciones): Observable<Inscripciones> {
    return this.http.post<Inscripciones>(`${this.apiURL}/inscriptions`, inscripciones).pipe(catchError(this.manejoError))
  }

  eliminarInscripciones(inscripciones: Inscripciones): Observable<Inscripciones> {
    return this.http.delete<Inscripciones>(`${this.apiURL}/inscriptions/${inscripciones.id}`).pipe(catchError(this.manejoError));
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
