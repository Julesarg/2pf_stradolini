import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users.component';
import { Error404Component } from 'src/app/shared/errors/error404/error404.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
  },
  { path: '**', component: Error404Component }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
