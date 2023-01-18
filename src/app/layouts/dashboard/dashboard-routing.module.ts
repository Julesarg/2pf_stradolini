import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { CoursesComponent } from '../../pages/courses/courses.component';
import { UsersComponent } from '../../pages/users/users.component';
import { InscriptionsComponent } from '../../pages/inscriptions/inscriptions.component';
import { AuthenticationGuard } from 'src/app/core/guards/authentication.guard';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent, children:

      [{ path: 'home', component: HomeComponent },

      {
        path: 'students', loadChildren: () => import('../../pages/students/students.module').then(module => module.StudentsModule),
        // canActivate: [AuthenticationGuard]
      },
      {
        path: 'courses', loadChildren: () => import('../../pages/courses/courses.module').then(module => module.CoursesModule),
      },
      {
        path: 'users', component: UsersComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'inscriptions', component: InscriptionsComponent,
        canActivate: [AuthenticationGuard]
      },

      ]


  }
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
