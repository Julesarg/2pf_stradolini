import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: '', component: DashboardComponent, loadChildren: () => import('./layouts/dashboard/dashboard.module').then(module => module.DashboardModule) }
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
