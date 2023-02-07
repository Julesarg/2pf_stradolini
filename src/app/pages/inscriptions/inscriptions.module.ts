import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsComponent } from './inscriptions.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InscriptionsComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,

  ],
  exports: [
    InscriptionsComponent,
    InscriptionsRoutingModule
  ]
})
export class InscriptionsModule { }