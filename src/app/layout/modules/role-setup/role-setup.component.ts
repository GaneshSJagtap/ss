import { Component, OnInit } from "@angular/core";
// import { HttpService } from "../../services/http.service";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-setup",
  templateUrl: "./role-setup.component.html",
  styleUrls: ["./role-setup.component.scss"]
})
export class RoleSetupComponent implements OnInit {
  title = "Role Setup";
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
  roleSetups = [
    {
      companyName: "Exela India",
      role: "Client User"
    },
    {
      companyName: "Exela India",
      role: "Client Admin"
    },
    {
      companyName: "Exela Mexico",
      role: "Client Admin"
    },
    {
      companyName: "Exela Germany",
      role: "Client User"
    },
    {
      companyName: "Exela Germany",
      role: "Product Admin"
    },
    {
      companyName: "Exela France",
      role: "Client Admin"
    },
    {
      companyName: "Exela Span",
      role: "Product Admin"
    },
    {
      companyName: "Exela India",
      role: "Client User"
    },
    {
      companyName: "Exela India",
      role: "Client Admin"
    },
    {
      companyName: "Exela Mexico",
      role: "Client Admin"
    }
  ];

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
    this._router.navigate(["/role-setup/add-rolesetup"]);
  }
}
