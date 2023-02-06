import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '', component: CoursesComponent,
    children: [
      {
        path: '', loadChildren: () => import('../../shared/errors/error404/error404.module').then(module => module.Error404Module),
      }
    ]
  }
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
