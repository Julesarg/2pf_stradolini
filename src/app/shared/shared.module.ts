import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsDirective } from './directives/fonts.directive';
import { AddStudentErrorsComponent } from './errors/add-student-errors/add-student-errors.component';
import { MaterialModuleModule } from './modules/material-module.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullnamePipe } from './pipes/fullname.pipe';



@NgModule({
  declarations: [
    FontsDirective,
    AddStudentErrorsComponent,
    FontsDirective,
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
    FullnamePipe
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule
  ],
  exports: [
    FontsDirective,
    AddStudentErrorsComponent,
    FontsDirective,
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
    MaterialModuleModule,
    FullnamePipe
  ]
})
export class SharedModule { }
