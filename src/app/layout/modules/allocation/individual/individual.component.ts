import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-individual",
  templateUrl: "./individual.component.html",
  styleUrls: ["./individual.component.scss"]
})
export class IndividualComponent implements OnInit {
  title = "Facility Setup";
  faSearch = faSearch;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  totalRows: number = 10;

  columns: Array<any> = [
    {
      title: "User Name",
      key: "userName",
      sortable: true,
      filter: true
    },
    {
      title: "Facility",
      key: "facility",
      sortable: true,
      filter: true
    },
    { title: "Role", key: "role", sortable: true, filter: true }
  ];

  facilities = [
    {
      userName: "Susan White",
      facility: "Exela India",
      role: "Client User"
    },
    {
      userName: "John Doe",
      facility: "Exela Canada",
      role: "Product Admin"
    },
    {
      userName: "Peter WiLliurn",
      facility: "Exela Mexico",
      role: "CLient Admin"
    },
    {
      userName: "Alex paul",
      facility: "Exela Germany",
      role: "Client User"
    },
    {
      userName: "John Morris",
      facility: "Exela India",
      role: "Product AdmIn"
    },
    {
      userName: "Brian Paul",
      facility: "Exela Franoe",
      role: "Client Adrnin"
    },
    {
      userName: "Susan White",
      facility: "Exela India",
      role: "Client User"
    },
    {
      userName: "John Doe",
      facility: "Exela Canada",
      role: "Product Admin"
    },
    {
      userName: "Peter WiLliurn",
      facility: "Exela Mexico",
      role: "CLient Admin"
    },
    {
      userName: "Susan White",
      facility: "Exela India",
      role: "Client User"
    }
  ];

  // public policys
  constructor(private _router: Router) {}

  ngOnInit() {}

  goToLink() {
    this._router.navigate(["/facility/facility-setup/building"]);
  }
}
