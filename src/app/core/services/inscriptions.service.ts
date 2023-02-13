import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Inscripciones } from '../models/inscriptions.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  private readonly baseURL = 'https://63e99b664f3c6aa6e7cf374e.mockapi.io';

  constructor(private httpClient: HttpClient) { }

  obtenerInscripciones(): Observable<Inscripciones[]> {
    return this.httpClient.get<Inscripciones[]>(`${this.baseURL}/inscriptions`).pipe(catchError(this.manejoError))
  }

  agregarInscripciones(inscripciones: Inscripciones): Observable<Inscripciones> {
    return this.httpClient.post<Inscripciones>(`${this.baseURL}/inscriptions`, inscripciones).pipe(catchError(this.manejoError))
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
