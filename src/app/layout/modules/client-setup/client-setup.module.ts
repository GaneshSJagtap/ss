import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ClickOutsideModule } from "ng-click-outside";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/modules/material/material.module";
import { ClientSetupComponent } from "./client-setup.component";

const routes: Routes = [
  {
    path: "",
    component: ClientSetupComponent
  }
];

@NgModule({
  declarations: [ClientSetupComponent],
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
export class ClientSetupModule {}
