import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/core/modules/material-module.module';
import { Error404Component } from './error404.component';
import { Error404RoutingModule } from './error404-routing.module';


@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    Error404RoutingModule,
  ],
  exports: [
    Error404Component,
    Error404RoutingModule
  ],
  providers: [
  ]
})
export class Error404Module { }