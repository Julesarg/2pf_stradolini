import { ActionReducerMap } from "@ngrx/store";
import { authenticationReducer, AuthenticationState } from "./authentication/authentication.reducer";

export interface AppState {
  authenticationState: AuthenticationState
}

export const appReducer: ActionReducerMap<AppState> = {
  authenticationState: authenticationReducer
}