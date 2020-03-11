import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FacilitySetupComponent } from './facility-setup1/facility-setup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DataService } from "./services/facilitySetupData.service";
import { AddDialogComponent } from "./dialogs/add/add.dialog.component";
import { EditDialogComponent } from "./dialogs/edit/edit.dialog.component";
import { DeleteDialogComponent } from "./dialogs/delete/delete.dialog.component";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    InMemoryWebApiModule

  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  exports: [
  ],
  providers: [DataService],
})
export class ModulesModule { }
