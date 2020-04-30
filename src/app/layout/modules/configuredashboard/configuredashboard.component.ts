import { Component, OnInit } from "@angular/core";
// import { HttpService } from "../../services/http.service";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-configuredashboard",
  templateUrl: "./configuredashboard.component.html",
  styleUrls: ["./configuredashboard.component.scss"]
})
export class ConfiguredashboardComponent implements OnInit {
  title = "Configure Dashboard";
  public href: string = "";
  faSearch = faSearch;
  status = false;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  showView: boolean = false;

  columns: Array<any> = [
    { title: "Company Name", key: "companyName", sortable: true, filter: true },
    { title: "Role", key: "role", sortable: true, filter: true }
  ];
  roleSetups = [];

  // public policys
  constructor(private _router: Router) {}

  ngOnInit() {}

  toggleDropdown() {
    this.status = !this.status;
  }
  onClickedOutside(e: Event) {
    this.status = false;
  }
  gotoAddRoleLink() {
    this._router.navigate(["/configure-dashboard/add-pulse-setup"]);
  }
}
