import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/core/modules/material-module.module';
import { HomeComponent } from './home/home.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
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
    HomeComponent
  ]
})
export class PagesModule { }