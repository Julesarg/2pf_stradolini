import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, mergeMap, of, tap, catchError } from 'rxjs';
import { LoginSuccessful, SingleUserResponse } from '../models/reqres.interfaces';
import { User } from '../models/users.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://reqres.in/api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) { }

  login(data: { email: string; password: string }): Observable<User> {
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/1`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar
            )
        ),
        tap((user) => this.sessionService.setUser(user))
      );
  }
  logOut() {
    localStorage.removeItem('token');
    this.sessionService.setUser(null);
    this.router.navigate(['auth'])
  }

  adminToken(): Observable<boolean> {
    const token = localStorage.getItem('token')

    return of(token).pipe(
      tap((data) => {
        if (!data) throw new Error('not logged')
      }),
      mergeMap((token) =>
        this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/1`)),
      tap(({ data }) =>
        this.sessionService.setUser(
          new User(
            data.id,
            data.email,
            data.first_name,
            data.last_name,
            data.avatar
          )
        )
      ),
      map((user) => !!user),
      catchError(() => of(false))
    )
  }
}