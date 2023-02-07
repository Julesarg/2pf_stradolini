import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { Error404Component } from '../../shared/errors/error404/error404.component';

const routes: Routes = [
  {
    path: '', component: CoursesComponent,
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
export class CoursesRoutingModule { }
