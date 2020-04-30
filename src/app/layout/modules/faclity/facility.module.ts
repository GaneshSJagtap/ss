import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FaclityComponent } from "./faclity.component";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FacilitySetupComponent } from "./facility-setup/facility-setup.component";
import { AddNewFacilityComponent } from "./add-new-facility/add-new-facility.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../shared/modules/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AddfacilityComponent } from "./addfacility/addfacility.component";
import { AddbuildingComponent } from "./addbuilding/addbuilding.component";
import { AddfloorComponent } from "./addfloor/addfloor.component";
import { AddzoneComponent } from "./addzone/addzone.component";
import { AddsensorComponent } from "./addsensor/addsensor.component";
import { ClickOutsideModule } from "ng-click-outside";
import { BuildingComponent } from "./facility-setup/building/building.component";
import { FacilitiesComponent } from "./facility-setup/facilities/facilities.component";
import { FloorComponent } from "./facility-setup/floor/floor.component";
import { BinsComponent } from "./facility-setup/bins/bins.component";

// import { FModule } from './f/f.module';

const routes: Routes = [
  {
    path: "",
    component: FaclityComponent,
    children: [
      {
        path: "",
        redirectTo: "facility-setup",
        pathMatch: "full"
      },
      {
        path: "facility-setup",
        component: FacilitySetupComponent,
        children: [
          {
            path: "",
            redirectTo: "facility",
            pathMatch: "full"
          },
          {
            path: "facility",
            component: FacilitiesComponent
          },
          {
            path: "building",
            component: BuildingComponent
          },
          {
            path: "floor",
            component: FloorComponent
          },
          {
            path: "bins",
            component: BinsComponent
          }
        ]
      },
      {
        path: "add-facility",
        component: AddNewFacilityComponent
      }
      // {
      //   path: 'building',
      //   component: BuildingComponent,
      // }
    ]
  }
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
    AddsensorComponent,
    BuildingComponent,
    FacilitiesComponent,
    FloorComponent,
    BinsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild(routes),
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    ClickOutsideModule
    // FModule
  ],
  exports: []
})
export class FacilityModule {}
