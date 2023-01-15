import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { StudentsComponent } from '../../pages/students/students.component';
import { CoursesComponent } from '../../pages/courses/courses.component';
import { UsersComponent } from '../../pages/users/users.component';
import { InscriptionsComponent } from '../../pages/inscriptions/inscriptions.component';
import { AuthenticationGuard } from 'src/app/core/guards/authentication.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'inscriptions', component: InscriptionsComponent },
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
