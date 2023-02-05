import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/core/models/users.model";
import { setAuthenticatedUser, unsetAuthenticatedUser } from './authentication.actions';

export interface AuthenticationState {
  authenticatedUser: User | null
}

const initialState: AuthenticationState = {
  authenticatedUser: null,

}

export const authenticationReducer = createReducer(
  initialState,
  on(setAuthenticatedUser, (oldState, data) => {
    return {
      ...oldState, authenticatedUser: data.authenticatedUser
    }
  }),
  on(unsetAuthenticatedUser, (oldState) => {
    return { ...oldState, authenticatedUser: null }
  })
);