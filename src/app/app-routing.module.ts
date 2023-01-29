import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./layouts/dashboard/dashboard.module').then(module => module.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
