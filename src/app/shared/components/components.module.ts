import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../../layouts/dashboard/dashboard-routing.module';
import { GreenTextDirective } from '../../core/directives/greenText.directive';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
    GreenTextDirective,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
    GreenTextDirective,
    SpinnerComponent
  ]
})
export class ComponentsModule { }