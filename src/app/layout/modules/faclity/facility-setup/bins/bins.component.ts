import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-bins",
  templateUrl: "./bins.component.html",
  styleUrls: ["./bins.component.scss"]
})
export class BinsComponent implements OnInit {
  showEdit = false;
  title = "Facility Setup";
  faSearch = faSearch;
  status = false;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;
  totalRows: number = 10;

  searchParameter: any;

  columns: Array<any> = [
    {
      title: "Bin Name",
      key: "binName",
      sortable: true,
      // link: true,
      filter: true
    },
    {
      title: "Status",
      key: "binStatus",
      sortable: true,
      filter: true
    }
  ];
  bins = [
    {
      binName: "Bin 01",
      binStatus: "Critical"
    },
    {
      binName: "Bin 02",
      binStatus: "Empty"
    },
    {
      binName: "Bin 03",
      binStatus: "Battery"
    },
    {
      binName: "Bin 04",
      binStatus: "Humidity"
    },
    {
      binName: "Bin 05",
      binStatus: "Temperature"
    },
    {
      binName: "Bin 06",
      binStatus: "Critical"
    },
    {
      binName: "Bin 07",
      binStatus: "Empty"
    },
    {
      binName: "Bin 08",
      binStatus: "Battery"
    },
    {
      binName: "Bin 09",
      binStatus: "Humidity"
    },
    {
      binName: "Bin 10",
      binStatus: "Temperature"
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
}
