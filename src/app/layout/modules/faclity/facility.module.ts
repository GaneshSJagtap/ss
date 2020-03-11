import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaclityComponent } from './faclity.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FacilitySetupComponent } from './facility-setup/facility-setup.component';
import { AddNewFacilityComponent } from './add-new-facility/add-new-facility.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddfacilityComponent } from './addfacility/addfacility.component';
import { AddbuildingComponent } from './addbuilding/addbuilding.component';
import { AddfloorComponent } from './addfloor/addfloor.component';
import { AddzoneComponent } from './addzone/addzone.component';
import { AddsensorComponent } from './addsensor/addsensor.component';
// import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';

const routes: Routes = [
  {
    path: '',
    component: FaclityComponent,
    children: [
      {
        path: '', redirectTo: 'facility-setup', pathMatch: 'full'
      },
      {
        path: 'facility-setup',
        component: FacilitySetupComponent,
      },
      {
        path: 'add-facility',
        component: AddNewFacilityComponent,
      }
    ]
  },

];

@NgModule({
  declarations: [
    FaclityComponent,
    FacilitySetupComponent,
    AddNewFacilityComponent,
    AddfacilityComponent,
    AddbuildingComponent,
    AddfloorComponent,
    AddzoneComponent,
    AddsensorComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild(routes),
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  exports: [
  ]
})
export class FacilityModule { }
