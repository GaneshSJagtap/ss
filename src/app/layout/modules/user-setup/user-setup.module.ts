import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { UserSetupComponent } from "./user-setup.component";
import { ClickOutsideModule } from "ng-click-outside";
import { AddUserSetupComponent } from "./add-user-setup/add-user-setup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/modules/material/material.module";

const routes: Routes = [
  {
    path: "",
    component: UserSetupComponent
  },
  {
    path: "add-usersetup",
    component: AddUserSetupComponent
  }
];

@NgModule({
  declarations: [UserSetupComponent, AddUserSetupComponent],
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
export class UserSetupModule {}
