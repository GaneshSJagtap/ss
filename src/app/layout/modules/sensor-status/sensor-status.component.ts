import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sensor-status",
  templateUrl: "./sensor-status.component.html",
  styleUrls: ["./sensor-status.component.scss"]
})
export class SensorStatusComponent implements OnInit {
  title = "Sensor Status";

  columns: Array<any> = [
    { title: "", key: "mainTitle", link: true },
    {
      title: "Total Sensor Count",
      key: "sensorCount",
      sortable: true,
      filter: true
    },
    { title: "Active", key: "active", sortable: true, filter: true },
    { title: "Not Workign", key: "notWorking", sortable: true, filter: true },
    { title: "Battry Low", key: "battryLow", sortable: true, filter: true },
    { title: "Normal Range", key: "normalRange", sortable: true, filter: true },
    { title: "Out of Range", key: "outOfRange", sortable: true, filter: true }
  ];
  userSetups = [
    {
      mainTitle: "Bins",
      sensorCount: "50",
      active: "03",
      notWorking: "02",
      battryLow: "01",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      mainTitle: "Temperature",
      sensorCount: "60",
      active: "03",
      notWorking: "03",
      battryLow: "03",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      mainTitle: "Humidity",
      sensorCount: "75",
      active: "02",
      notWorking: "01",
      battryLow: "03",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      mainTitle: "Work Place",
      sensorCount: "50",
      active: "01",
      notWorking: "01",
      battryLow: "00",
      normalRange: ">80",
      outOfRange: "--"
    }
  ];

  constructor(private _rauter: Router) {}

  ngOnInit() {}
  goToLink() {
    this._rauter.navigate(["./sensor-status/bins"]);
  }
}
