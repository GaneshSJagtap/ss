import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDataTableComponent } from './ng-data-table.component';
import { MorePopupComponent } from './more-popup/more-popup.component';


@NgModule({
  declarations: [
    NgDataTableComponent,
    MorePopupComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgDataTableComponent
  ]
})
export class NgDataTableModule { }
