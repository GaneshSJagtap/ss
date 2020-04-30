import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { RoleSetupComponent } from "./role-setup.component";
import { ClickOutsideModule } from "ng-click-outside";
import { MaterialModule } from "../shared/modules/material/material.module";
import { AddRoleSetupComponent } from "./add-role-setup/add-role-setup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
const routes: Routes = [
  {
    path: "",
    component: RoleSetupComponent
  },
  {
    path: "add-rolesetup",
    component: AddRoleSetupComponent
  }
];

@NgModule({
  declarations: [RoleSetupComponent, AddRoleSetupComponent],
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
export class RoleSetupModule {}
