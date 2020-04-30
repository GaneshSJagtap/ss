import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ClickOutsideModule } from "ng-click-outside";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/modules/material/material.module";
import { AllocationComponent } from "./allocation.component";
import { IndividualComponent } from "./individual/individual.component";
import { GroupComponent } from "./group/group.component";
import { AddAllocationComponent } from "./add-allocation/add-allocation.component";

const routes: Routes = [
  {
    path: "",
    component: AllocationComponent
  },
  {
    path: "add-allocation",
    component: AddAllocationComponent
  }
];

@NgModule({
  declarations: [
    AllocationComponent,
    IndividualComponent,
    GroupComponent,
    AddAllocationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild(routes),
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AllocationModule {}
