import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesModule } from 'src/app/pages/pages.module';
import { CleanLayoutComponent } from './clean-layout.component';
import { CleanLayoutRoutingModule } from './clean-layout-routing.module';



@NgModule({
  declarations: [
    CleanLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    PagesModule,
    CleanLayoutRoutingModule
  ],
  exports: [
    CleanLayoutRoutingModule
  ],
  providers: [
  ]
})
export class CleanLayoutModule { }
