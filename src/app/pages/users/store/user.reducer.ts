import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserList } from '../model/userlist.model';

export const userFeatureKey = 'user';

export interface State {
  data: UserList[];
  totalUsers: number
}

export const initialState: State = {
  data: [],
  totalUsers: 0
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return {
      ...state, data: action.data,
      totalUsers: action.totalUsers
    }
  }),
  on(UserActions.loadUsersFailure, (state, action) => state),

);
