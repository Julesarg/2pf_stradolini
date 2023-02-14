import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, mergeMap, Observable, take, tap, throwError } from 'rxjs';
import { Inscription } from '../models/inscriptions.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {
  public inscriptions$: Observable<Inscription[]>;
  private inscriptions = new BehaviorSubject<Inscription[]>([]);

  private readonly baseURL = 'https://63e99b664f3c6aa6e7cf374e.mockapi.io';

  constructor(private httpClient: HttpClient) {

    this.inscriptions$ = this.inscriptions.asObservable();
    this.getInscriptionsFromApi().subscribe((inscription) => {
      this.inscriptions.next(inscription);
    });
  }

  getInscriptionsFromApi(): Observable<Inscription[]> {
    return this.httpClient.get<Inscription[]>(
      `${this.baseURL}/inscriptions`
    );
  }

  addInscription(inscription: Inscription) {
    this.inscriptions$
      .pipe(
        take(1),
        mergeMap((studentlist) =>
          this.httpClient
            .post<Inscription>(
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

  deleteInscription(inscripciones: Inscription): Observable<Inscription> {
    return this.httpClient.delete<Inscription>(`${this.baseURL}/inscriptions/${inscripciones.id}`).pipe(catchError(this.manejoError));
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
