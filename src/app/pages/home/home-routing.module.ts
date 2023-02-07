import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Error404Component } from 'src/app/shared/errors/error404/error404.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  { path: '**', component: Error404Component }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }