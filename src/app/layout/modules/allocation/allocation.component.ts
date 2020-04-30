import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-allocation",
  templateUrl: "./allocation.component.html",
  styleUrls: ["./allocation.component.scss"]
})
export class AllocationComponent implements OnInit {
  title = "Allocation";
  faSearch = faSearch;
  status = false;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  individualComponent: boolean = true;
  groupComponent: boolean = false;

  constructor(private _router: Router) {}

  ngOnInit() {}

  toggleDropdown() {
    this.status = !this.status;
  }
  onClickedOutside(e: Event) {
    this.status = false;
  }
  individual() {
    this.individualComponent = true;
    this.groupComponent = false;
  }
  group() {
    this.individualComponent = false;
    this.groupComponent = true;
  }
  goToAddNewAllocation() {
    this._router.navigate(["/allocation/add-allocation"]);
  }
}
