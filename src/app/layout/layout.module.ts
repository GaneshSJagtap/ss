import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { layoutroutes } from './layout.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './../layout/modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    LayoutComponent

  ],
  imports: [
    RouterModule.forRoot(layoutroutes),
    CommonModule,
    BrowserModule,
    MaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    ModulesModule,
    FontAwesomeModule

  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
