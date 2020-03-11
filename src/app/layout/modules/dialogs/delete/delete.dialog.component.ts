import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { DataService } from "../../services/facilitySetupData.service";

@Component({
  selector: "app-delete.dialog",
  templateUrl: "../../dialogs/delete/delete.dialog.html",
  styleUrls: ["../../dialogs/delete/delete.dialog.scss"]
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteUser(this.data.id);
  }
}
