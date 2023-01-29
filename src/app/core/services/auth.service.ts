import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap, of, tap } from 'rxjs';
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
    private readonly sessionService: SessionService
  ) { }

  login(data: { email: string; password: string }): Observable<User> {
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
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
}


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   apiUrl = 'https://reqres.in/api';

//   constructor(
//     private readonly httpClient: HttpClient,
//     private readonly store: Store<AppState>,
//     private readonly router: Router,
//   ) { }

//   login(data: { email: string; password: string }): Observable<any> {
//     return this.httpClient
//       .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
//       .pipe(
//         tap((data) => localStorage.setItem('token', data.token)),
//         mergeMap(() =>
//           this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
//         ),
//         map(
//           ({ data }) =>
//             new User(
//               data.id,
//               data.email,
//               data.first_name,
//               data.last_name,
//               data.avatar
//             )
//         ),
//         // tap((user) => this.sessionService.setUser(user))
//         tap(
//           (user) => this.store.dispatch(
//             setAuthenticatedUser({
//               authenticatedUser: user
//             })
//           )
//         )
//       );
//   }

//   logOut() {
//     localStorage.removeItem('token');
//     this.store.dispatch(unsetAuthenticatedUser());
//     this.router.navigate(['auth', 'login']);
//   }

//   verifyToken(): Observable<boolean> {
//     const lsToken = localStorage.getItem('token');

//     return of(lsToken)
//       .pipe(
//         tap((token) => {
//           if (!token) throw new Error('Token invalido')
//         }),
//         mergeMap((token) =>
//           this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
//         ),
//         tap(({ data }) =>
//           this.store.dispatch(
//             setAuthenticatedUser({
//               authenticatedUser: new User(
//                 data.id,
//                 data.email,
//                 data.first_name,
//                 data.last_name,
//                 data.avatar
//               )
//             })
//           )
//         ),
//         map((user) => !!user),
//         catchError(() => of(false))
//       )
//   }
// }