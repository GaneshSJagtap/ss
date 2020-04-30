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
interface City {
  name: string;
}
interface Roles {
  name: string;
}

@Component({
  selector: "app-add-user-setup",
  templateUrl: "./add-user-setup.component.html",
  styleUrls: ["./add-user-setup.component.scss"]
})
export class AddUserSetupComponent implements OnInit {
  title = "Role Setup";
  checkBox = `<label class="squairCheckbox"><input type="checkbox"></label>`;
  checkBox1 = `<label class="toggleCheckbox"><input type="checkbox"></label>`;

  departments: Departments[] = [
    { name: "Department 1" },
    { name: "Department 2" },
    { name: "Department 3" }
  ];
  roles: Roles[] = [{ name: "Role 1" }, { name: "Role 2" }, { name: "Role 3" }];

  countries: Country[] = [
    { name: "India" },
    { name: "America" },
    { name: "France" },
    { name: "Europe " }
  ];
  states: State[] = [
    { name: "Maharashtra" },
    { name: "Utter Pradesh" },
    { name: "Andhra" },
    { name: "Karnataka " }
  ];
  cities: City[] = [
    { name: "Pune" },
    { name: "Mumbai" },
    { name: "Nashil" },
    { name: "Aurangabad " }
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
