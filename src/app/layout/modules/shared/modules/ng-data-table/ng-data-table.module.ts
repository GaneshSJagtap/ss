import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDataTableComponent } from './ng-data-table.component'


@NgModule({
  declarations: [
    NgDataTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgDataTableComponent
  ]
})
export class NgDataTableModule { }
