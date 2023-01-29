import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../../layouts/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }