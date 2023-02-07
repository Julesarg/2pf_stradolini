import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UserActions from './user.actions';
import { HttpClient } from '@angular/common/http';
import { UserList } from '../model/userlist.model';

export interface UsersListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserList[];
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}


@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap((action) =>
        this.getUsersListFromApi(action.page, action.per_page).pipe(
          map(response => UserActions.loadUsersSuccess({ data: response.data, totalUsers: response.total })),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private httpClient: HttpClient) { }
  private getUsersListFromApi(page: number, per_page: number): Observable<UsersListResponse> {
    return this.httpClient.get<UsersListResponse>('https://reqres.in/api/users', {
      params: {
        page,
        per_page
      },
    })
  }
}
