import { Component, OnInit } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from "@angular/router";
import { ModulesService } from "../../modules.service";

@Component({
  selector: "app-root",
  templateUrl: "./facility-setup.component.html",
  styleUrls: ["./facility-setup.component.scss"]
})
export class FacilitySetupComponent implements OnInit {
  public href: string = "";
  title = "Facility Setup";
  faSearch = faSearch;
  status = false;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;

  searchParameter: any;

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
    }
  ];

  // public policys
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modulesService: ModulesService
  ) {}

  ngOnInit() {
    // this.modulesService.$getpath.subscribe(val => {
    //   this.href = this.activatedRoute.snapshot.url[0].path;
    // });
  }

  goToLink(row: any, column: any) {
    this.href = this.activatedRoute.snapshot.url[0].path;
    console.log(this.href, "facility component");
  }

  toggleDropdown() {
    this.status = !this.status;
  }
  onClickedOutside(e: Event) {
    this.status = false;
  }
  // gotoaddfacility() {
  //   alert('Hi');
  //   console.log('clicked')
  //   this.router.navigate(['/facility-setup/add-facility']);
  // }
  // onClickedOutside(e: Event) {
  //   this.status = false;
  // }
}
