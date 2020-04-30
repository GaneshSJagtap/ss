import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "src/app/layout/services/http.service";

interface CompanyNames {
  name: string;
}
interface Assignmenu {
  checkBox: any;
  menu: string;
  radioBtn: any;
}

@Component({
  selector: "app-addrolesetup",
  templateUrl: "./add-role-setup.component.html",
  styleUrls: ["./add-role-setup.component.scss"]
})
export class AddRoleSetupComponent implements OnInit {
  title = "Role Setup";
  checkBox = `<label class="squairCheckbox"><input type="checkbox"></label>`;
  checkBox1 = `<label class="toggleCheckbox"><input type="checkbox"></label>`;

  companies: CompanyNames[] = [
    { name: "Exela Pune" },
    { name: "Exela Mumbai" },
    { name: "Exela Chennai" }
  ];

  assignmenus: Assignmenu[] = [
    {
      checkBox: this.checkBox,
      menu: "Dashboard",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Client Setup",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "User Setup",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Role Setup",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Facility Setup",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Configure Dasuboard",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Sensor Status",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Floor View",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Bin Information",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Site Design Setup",
      radioBtn: this.checkBox1
    },
    {
      checkBox: this.checkBox,
      menu: "Sensor Information",
      radioBtn: this.checkBox1
    }
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
