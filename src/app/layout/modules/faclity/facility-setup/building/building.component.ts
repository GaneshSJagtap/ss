import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-building",
  templateUrl: "./building.component.html",
  styleUrls: ["./building.component.scss"]
})
export class BuildingComponent implements OnInit {
  title = "Facility Setup";
  faSearch = faSearch;
  status = false;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  totalRows: number = 10;

  searchParameter: any;

  columns: Array<any> = [
    {
      title: "Building Name",
      key: "buildingName",
      sortable: true,
      link: true,
      filter: true
    },
    {
      title: "Number of Floors",
      key: "numberOfFloors",
      sortable: true,
      filter: true
    }
  ];
  buildings = [
    {
      buildingName: "Building 01",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 02",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 03",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 04",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 05",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 06",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 07",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 08",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 09",
      numberOfFloors: "10 Floors"
    },
    {
      buildingName: "Building 10",
      numberOfFloors: "10 Floors"
    }
  ];

  // public policys
  constructor(private _router: Router) {}

  ngOnInit() {
    // this.searchParameter['columnKey'] = {};
  }

  toggleDropdown() {
    this.status = !this.status;
  }
  gotoaddfacility() {
    alert("Hi");
    console.log("clicked");
    this._router.navigate(["/facility-setup/add-facility"]);
  }
  onClickedOutside(e: Event) {
    this.status = false;
  }

  goToLink() {
    this._router.navigate(["/facility/facility-setup/floor"]);
  }
}
