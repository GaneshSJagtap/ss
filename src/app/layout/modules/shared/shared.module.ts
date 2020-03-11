import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SdiebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { NgDataTableModule } from './modules/ng-data-table/ng-data-table.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeadingsectionComponent } from './components/headingsection/headingsection.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SdiebarComponent,
    FooterComponent,
    BreadcrumbsComponent,
    HeadingsectionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    NgDataTableModule
  ],
  exports: [
    HeaderComponent,
    SdiebarComponent,
    FooterComponent,
    NgDataTableModule,
    BreadcrumbsComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
