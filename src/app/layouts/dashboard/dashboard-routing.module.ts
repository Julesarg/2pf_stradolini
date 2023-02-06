import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { InscriptionsComponent } from '../../pages/inscriptions/inscriptions.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { DashboardComponent } from './dashboard.component';
import { Error404Component } from 'src/app/shared/errors/error404/error404.component';

const routes: Routes = [

  {
    path: 'dashboard', component: DashboardComponent,
    children:
      [{ path: 'home', component: HomeComponent },
      {
        path: 'students', loadChildren: () => import('../../pages/students/students.module').then(module => module.StudentsModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'courses', loadChildren: () => import('../../pages/courses/courses.module').then(module => module.CoursesModule),
      },
      {
        path: 'users', loadChildren: () => import('../../pages/users/users.module').then(module => module.UsersModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'inscriptions', component: InscriptionsComponent,
        canActivate: [AdminGuard]
      },
      {
        path: '**', loadChildren: () => import('../../shared/errors/error404/error404.module').then(module => module.Error404Module),
      },
      ]
  },

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
export class DashboardRoutingModule { }