import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "src/app/layout/services/http.service";
import { isNgTemplate } from "@angular/compiler";

interface UserNames {
  name: string;
}

interface Facilities {
  name: string;
}
interface Buildings {
  name: string;
}
interface Floors {
  name: string;
}
interface Sensors {
  name: string;
}

@Component({
  selector: "app-add-allocation",
  templateUrl: "./add-allocation.component.html",
  styleUrls: ["./add-allocation.component.scss"]
})
export class AddAllocationComponent implements OnInit {
  title = "Add Allocation";

  buildingsBox: boolean = false;
  floorBox: boolean = false;
  sensorBox: boolean = false;
  selectedItem: any;

  facilities: Facilities[] = [
    { name: "Exela Pune Shardha" },
    { name: "Exela Delhi" },
    { name: "Exela Pune SBR" },
    { name: "Exela Vashi" }
  ];

  buildings: Buildings[] = [
    { name: "Building 01" },
    { name: "Building 02" },
    { name: "Building 03" },
    { name: "Building 04" }
  ];
  floors: Floors[] = [
    { name: "Floor 01" },
    { name: "Floor 02" },
    { name: "Floor 03" },
    { name: "Floor 04" }
  ];
  sensors: Sensors[] = [
    { name: "Sensor 01" },
    { name: "Sensor 02" },
    { name: "Sensor 03" },
    { name: "Sensor 04" }
  ];

  userNames: UserNames[] = [
    { name: "Susan White" },
    { name: "John Glyn" },
    { name: "Ila Parkar" },
    { name: "Peater Anderson" },
    { name: "John Doe" },
    { name: "Stanley Foster" },
    { name: "Susan White" },
    { name: "John Glyn" },
    { name: "Ila Parkar" },
    { name: "Peater Anderson" },
    { name: "John Doe" },
    { name: "Stanley Foster" }
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
  }

  canceladdroleform() {
    this.addroleform.reset();
  }

  getFacilitieList(item) {
    this.selectedItem = item;
    this.buildingsBox = true;
  }
  getBuildingList() {
    this.floorBox = true;
  }
  getFloorList() {
    this.sensorBox = true;
  }
  isActive(item) {
    return this.selectedItem === item;
  }
}
