import { createAction, props } from '@ngrx/store';
import { UserList } from '../model/userlist.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number, per_page: number }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: UserList[], totalUsers: number }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
