import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "src/app/layout/services/http.service";

interface Departments {
  name: string;
}
interface Country {
  name: string;
}
interface State {
  name: string;
}
interface GraphTypes {
  name: string;
}
interface ServiceNames {
  name: string;
}

@Component({
  selector: "app-add-pulse-setup",
  templateUrl: "./add-pulse-setup.component.html",
  styleUrls: ["./add-pulse-setup.component.scss"]
})
export class AddPulseSetupComponent implements OnInit {
  title = "Add Pulse Setup";

  serviceNames: ServiceNames[] = [
    { name: "Service 1" },
    { name: "Service 2" },
    { name: "Service 3" },
    { name: "Service 4" },
    { name: "Service 5" }
  ];

  graphTypes: GraphTypes[] = [
    { name: "Graph Type 1" },
    { name: "Graph Type 2" },
    { name: "Graph Type 3" },
    { name: "Graph Type 4" },
    { name: "Graph Type 5" }
  ];

  constructor(public httpService: HttpService, public router: Router) {}
  addroleform = new FormGroup({
    companies: new FormControl(),
    role: new FormControl()
  });

  ngOnInit() {}

  addroleSubmitForm() {
    if (this.addroleform.invalid) {
      return;
    }
    // this.createNewFacility(this.addroleform.value);
  }

  // Register a new Facility; HTTP POST Request
  // createNewFacility(facilityDetails) {
  //   this.httpService.post(UrlDetails.facility, facilityDetails).subscribe(
  //     response => {
  //       this.addroleform.reset();
  //       this.router.navigate(["/facility/add-facility"]);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  canceladdroleform() {
    this.addroleform.reset();
  }
  // facilityName = new FormControl("", [Validators.required]);
}
