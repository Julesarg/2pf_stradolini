import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';
import { StoreModule } from '@ngrx/store';
import { reducer, studentFeatureKey } from './store/student.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(studentFeatureKey, reducer),
    EffectsModule.forFeature([StudentEffects])
  ]
})
export class StudentsStoreModule { }
