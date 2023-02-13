import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscriptionsComponent } from './inscriptions.component';



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
    InscriptionsRoutingModule,
    InscriptionsComponent
  ]
})
export class InscriptionsModule { }