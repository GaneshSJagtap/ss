import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ClickOutsideModule } from "ng-click-outside";
import { MaterialModule } from "../shared/modules/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfiguredashboardComponent } from "./configuredashboard.component";
import { AddPulseSetupComponent } from "./add-pulse-setup/add-pulse-setup.component";
const routes: Routes = [
  {
    path: "",
    component: ConfiguredashboardComponent
  },
  {
    path: "add-pulse-setup",
    component: AddPulseSetupComponent
  }
];

@NgModule({
  declarations: [ConfiguredashboardComponent, AddPulseSetupComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild(routes),
    ClickOutsideModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  exports: []
})
export class ConfiguredashboardModule {}
