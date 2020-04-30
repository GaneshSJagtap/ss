import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-floor",
  templateUrl: "./floor.component.html",
  styleUrls: ["./floor.component.scss"]
})
export class FloorComponent implements OnInit {
  title = "Facility Setup";
  faSearch = faSearch;
  status = false;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  totalRows: number = 10;

  searchParameter: any;

  columns: Array<any> = [
    {
      title: "Floor Nmae",
      key: "floorName",
      sortable: true,
      link: true,
      filter: true
    },
    {
      title: "Number of Bins",
      key: "numberOfBins",
      sortable: true,
      filter: true
    }
  ];
  facilities = [
    {
      floorName: "Floor 01",
      numberOfBins: "07"
    },
    {
      floorName: "Floor 02",
      numberOfBins: "12"
    },
    {
      floorName: "Floor 03",
      numberOfBins: "09"
    },
    {
      floorName: "Floor 04",
      numberOfBins: "12"
    },
    {
      floorName: "Floor 05",
      numberOfBins: "15"
    },
    {
      floorName: "Floor 06",
      numberOfBins: "10"
    },
    {
      floorName: "Floor 07",
      numberOfBins: "10"
    },
    {
      floorName: "Floor 08",
      numberOfBins: "11"
    },
    {
      floorName: "Floor 09",
      numberOfBins: "20"
    },
    {
      floorName: "Floor 10",
      numberOfBins: "16"
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
    // console.log("clicked");
    this._router.navigate(["/facility-setup/add-facility"]);
  }
  onClickedOutside(e: Event) {
    this.status = false;
  }

  goToLink() {
    this._router.navigate(["/facility/facility-setup/bins"]);
  }
}
