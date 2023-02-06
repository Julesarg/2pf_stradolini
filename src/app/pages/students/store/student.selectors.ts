import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';

export const selectStudentState = createFeatureSelector<fromStudent.State>(
  fromStudent.studentFeatureKey
);
