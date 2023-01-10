import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';
import { CleanLayoutComponent } from './clean-layout/clean-layout.component';




@NgModule({
  declarations: [
    DashboardComponent,
    CleanLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    PagesModule
  ],
  exports: [
    DashboardComponent,
    CleanLayoutComponent
  ]
})
export class LayoutsModule { }
