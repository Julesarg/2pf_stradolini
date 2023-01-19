import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
