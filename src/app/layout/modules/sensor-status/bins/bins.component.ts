import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-bins",
  templateUrl: "./bins.component.html",
  styleUrls: ["./bins.component.scss"]
})
export class BinsComponent implements OnInit {
  title = "Sensor Status Bins";
  buildings: boolean = false;
  buildingTag: boolean = false;
  floors: boolean = false;
  bins: boolean = true;

  binsColumns: Array<any> = [
    {
      title: "Building",
      key: "building",
      link: true,
      sortable: true,
      filter: true
    },
    {
      title: "Total Sensor Count",
      link: true,
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
  binsRow = [
    {
      building: "Building 01",
      sensorCount: "50",
      active: "03",
      notWorking: "02",
      battryLow: "01",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      building: "Building 02",
      sensorCount: "60",
      active: "03",
      notWorking: "03",
      battryLow: "03",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      building: "Building 03",
      sensorCount: "75",
      active: "02",
      notWorking: "01",
      battryLow: "03",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      building: "Building 04",
      sensorCount: "50",
      active: "01",
      notWorking: "01",
      battryLow: "00",
      normalRange: ">80",
      outOfRange: "--"
    }
  ];

  buildingColumns: Array<any> = [
    {
      title: "Building",
      key: "building",
      link: true,
      sortable: true,
      filter: true
    },
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
  buildingRow = [
    {
      building: "Floor 01",
      sensorCount: "50",
      active: "03",
      notWorking: "02",
      battryLow: "01",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      building: "Floor 02",
      sensorCount: "60",
      active: "03",
      notWorking: "03",
      battryLow: "03",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      building: "Floor 03",
      sensorCount: "75",
      active: "02",
      notWorking: "01",
      battryLow: "03",
      normalRange: ">80",
      outOfRange: "--"
    },
    {
      building: "Floor 04",
      sensorCount: "50",
      active: "01",
      notWorking: "01",
      battryLow: "00",
      normalRange: ">80",
      outOfRange: "--"
    }
  ];

  floorColumns: Array<any> = [
    {
      title: "Bin",
      key: "bin",
      link: true,
      sortable: true,
      filter: true
    },
    {
      title: "Bin Level",
      key: "binLevel",
      sortable: true,
      filter: true
    },
    { title: "Battry Level", key: "battryLevel", sortable: true, filter: true },
    { title: "Online/Offline", key: "onOffLine", sortable: true, filter: true },
    {
      title: "Hrs Sins Last Emptied",
      key: "lastEmptied",
      sortable: true,
      filter: true
    }
  ];
  floorRow = [
    {
      bin: "Bin 01",
      binLevel: "28%",
      battryLevel: "49%",
      onOffLine: "Online",
      lastEmptied: "05"
    },
    {
      bin: "Bin 02",
      binLevel: "65%",
      battryLevel: "85%",
      onOffLine: "Online",
      lastEmptied: "03"
    },
    {
      bin: "Bin 03",
      binLevel: "25%",
      battryLevel: "15%",
      onOffLine: "Offline",
      lastEmptied: "08"
    },
    {
      bin: "Bin 04",
      binLevel: "41%",
      battryLevel: "16%",
      onOffLine: "Online",
      lastEmptied: "04"
    }
  ];

  constructor() {}

  ngOnInit() {}
  goToBuilding() {
    this.bins = false;
    this.buildings = true;
    this.buildingTag = true;
  }
  goToFloor() {
    this.bins = false;
    this.buildings = false;
    this.buildingTag = true;
    this.floors = true;
  }
  backToBin() {
    this.buildings = false;
    this.buildingTag = false;
  }
  backToBuilding() {
    this.floors = false;
    alert("Abcd");
  }
}
