import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { DataService } from "../../services/facilitySetupData.service";
import { FormControl, Validators } from "@angular/forms";
import { facilitySetup } from "../../models/facilitySetupData";

@Component({
  selector: "app-add.dialog",
  templateUrl: "../../dialogs/add/add.dialog.html",
  styleUrls: ["../../dialogs/add/add.dialog.scss"]
})
export class AddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: facilitySetup,
    public dataService: DataService
  ) { }

  formControl = new FormControl("", [Validators.required]);

  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
        ? "Not a valid email"
        : "";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addUser(this.data);
  }
}
