import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ClickOutsideModule } from "ng-click-outside";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/modules/material/material.module";
import { SensorStatusComponent } from "./sensor-status.component";
import { BinsComponent } from "./bins/bins.component";

const routes: Routes = [
  {
    path: "",
    component: SensorStatusComponent
  },
  {
    path: "bins",
    component: BinsComponent
  }
];

@NgModule({
  declarations: [SensorStatusComponent, BinsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild(routes),
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [],
  exports: []
})
export class SensorStatusModule {}
