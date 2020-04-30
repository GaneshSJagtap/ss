import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-group",
  templateUrl: "./group.component.html",
  styleUrls: ["./group.component.scss"]
})
export class GroupComponent implements OnInit {
  title = "Facility Setup";
  faSearch = faSearch;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  totalRows: number = 10;

  columns: Array<any> = [
    {
      title: "Group Name",
      key: "groupName",
      sortable: true,
      filter: true
    },
    {
      title: "Facility",
      key: "facility",
      sortable: true,
      filter: true
    },
    { title: "User", key: "user", sortable: true, filter: true }
  ];

  facilities = [
    {
      groupName: "Exela Pune",
      facility: "05",
      user: "50"
    },
    {
      groupName: "Exela Shradh",
      facility: "02",
      user: "120"
    },
    {
      groupName: "Exela Canada",
      facility: "08",
      user: "45"
    },
    {
      groupName: "Exela Delhi",
      facility: "07",
      user: "10"
    },
    {
      groupName: "Exela Germany",
      facility: "10",
      user: "58"
    },
    {
      groupName: "Exela Germany",
      facility: "06",
      user: "75"
    },
    {
      groupName: "Exela Belgrade",
      facility: "01",
      user: "150"
    },
    {
      groupName: "Exela Pune",
      facility: "05",
      user: "50"
    },
    {
      groupName: "Exela Shradh",
      facility: "02",
      user: "120"
    },
    {
      groupName: "Exela Canada",
      facility: "08",
      user: "45"
    }
  ];

  // public policys
  constructor(private _router: Router) {}

  ngOnInit() {}

  goToLink() {
    this._router.navigate(["/facility/facility-setup/building"]);
  }
}
