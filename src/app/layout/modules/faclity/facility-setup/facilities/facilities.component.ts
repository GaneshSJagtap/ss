import { Component, OnInit, Inject } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-facilities",
  templateUrl: "./facilities.component.html",
  styleUrls: ["./facilities.component.scss"]
})
export class FacilitiesComponent implements OnInit {
  title = "Facility Setup";
  faSearch = faSearch;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  totalRows: number = 10;

  columns: Array<any> = [
    {
      title: "Facility Name",
      key: "facilityName",
      sortable: true,
      link: true,
      filter: true
    },
    {
      title: "Contact Number",
      key: "contactNumber",
      sortable: true,
      filter: true
    },
    { title: "City", key: "city", sortable: true, filter: true },
    { title: "State", key: "state", sortable: true, filter: true },
    { title: "Country", key: "country", sortable: true, filter: true }
  ];
  facilities = [
    {
      facilityName: "Exela Pune",
      contactNumber: "90598 96569",
      city: "Pune",
      state: "Maharashtra",
      country: "India"
    },
    {
      facilityName: "Exela Pune",
      contactNumber: "0547B 52365",
      city: "Pune",
      state: "Maharashtra",
      country: "India"
    },
    {
      facilityName: "ExeLa Albany",
      contactNumber: "80569 52147",
      city: "ALbany",
      state: "New York",
      country: "USA"
    },
    {
      facilityName: "ExeLa Albany",
      contactNumber: "00147 52100",
      city: "Affiany",
      state: "New York",
      country: "United States"
    },
    {
      facilityName: "ExeLa Albany",
      contactNumber: "90632 51458",
      city: "ALbany",
      state: "New York",
      country: "United States"
    },
    {
      facilityName: "Exela Pune",
      contactNumber: "00569 52147",
      city: "Pune",
      state: "Maharashtra",
      country: "India"
    },
    {
      facilityName: "Exela Mumbai",
      contactNumber: "98658 51147",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India"
    },
    {
      facilityName: "Exela Pune",
      contactNumber: "90598 96569",
      city: "Pune",
      state: "Maharashtra",
      country: "India"
    },
    {
      facilityName: "Exela Pune",
      contactNumber: "0547B 52365",
      city: "Pune",
      state: "Maharashtra",
      country: "India"
    },
    {
      facilityName: "ExeLa Albany",
      contactNumber: "80569 52147",
      city: "ALbany",
      state: "New York",
      country: "USA"
    }
  ];

  // public policys
  constructor(private _router: Router) { }

  ngOnInit() {}

  goToLink() {
    this._router.navigate(["/facility/facility-setup/building"]);
  }
}
