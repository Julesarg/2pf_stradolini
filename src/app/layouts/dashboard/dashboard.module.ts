import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MaterialModuleModule } from 'src/app/core/modules/material-module.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PagesModule } from '../../pages/pages.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    PagesModule
  ],
  exports: [
    DashboardComponent,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }