import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/core/modules/material-module.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModuleModule,
    HomeModule
  ],
  exports: [
    RouterModule,
  ]
})
export class PagesModule { }