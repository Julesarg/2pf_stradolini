import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const authenticationStateSelector = (appState: AppState) => appState.authenticationState;
export const authenticatedUserSelector = createSelector(authenticationStateSelector, (authenticationState) => authenticationState.authenticatedUser)
