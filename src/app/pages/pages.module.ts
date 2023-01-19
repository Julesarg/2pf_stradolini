import { NgModule, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/core/modules/material-module.module';
import { HomeComponent } from './home/home.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { UsersComponent } from './users/users.component';
import { AuthenticationModule } from './authentication/authentication.module';




@NgModule({
  declarations: [
    HomeComponent,
    InscriptionsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModuleModule,
    AuthenticationModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    InscriptionsComponent,
    UsersComponent
  ]
})
export class PagesModule { }
