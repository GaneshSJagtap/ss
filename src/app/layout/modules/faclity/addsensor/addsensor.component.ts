import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



interface Country {
  name: string;
}
interface State {
  name: string;
}
interface City {
  name: string;
}
interface Facility {
  name: string;
}
interface Floor {
  name: string;
}
interface BuildingName {
  name: string;
}
interface SensorStatus {
  name: string;
}
interface roomZoneName {
  name: string;
}


@Component({
  selector: 'app-addsensor',
  templateUrl: './addsensor.component.html',
  styleUrls: ['./addsensor.component.scss']
})
export class AddsensorComponent implements OnInit {

  countries: Country[] = [
    { name: 'India' },
    { name: 'America' },
    { name: 'France' },
    { name: 'Europe ' },
  ];
  states: State[] = [
    { name: 'Maharashtra' },
    { name: 'Utter Pradesh' },
    { name: 'Andhra' },
    { name: 'Karnataka ' },
  ];
  cities: City[] = [
    { name: 'Pune' },
    { name: 'Mumbai' },
    { name: 'Nashil' },
    { name: 'Aurangabad ' },
  ];
  // facilities: Facility[] = [
  //   { name: 'Facility 1' },
  //   { name: 'Facility 2' },
  //   { name: 'Facility 3' },
  //   { name: 'Facility 4 ' }
  // ];
  facilities = [];

  floors: Floor[] = [
    { name: 'Floor 1' },
    { name: 'Floor 2' },
    { name: 'Floor 3' },
    { name: 'Floor 4 ' },
  ];
  buildingNames: BuildingName[] = [
    { name: 'Building Name 1' },
    { name: 'Building Name 2' },
    { name: 'Building Name 3' },
    { name: 'Building Name 4 ' },
  ];
  sensorStatus: SensorStatus[] = [
    { name: 'Active' },
    { name: 'Deactive' }
  ];
  roomZoneNames: roomZoneName[] = [
    { name: 'Room / Zone 1' },
    { name: 'Room / Zone 2' },
    { name: 'Room / Zone 3' },
    { name: 'Room / Zone 3' },
  ]


  constructor() { }

  ngOnInit() {
  }

  sensorform = new FormGroup({
    buildingname: new FormControl(),
    facilityname: new FormControl(),
    floornumber: new FormControl()
  });
  zoneFormSubmit() {
    if (this.sensorform.invalid) {
      return;
    }
    console.log(this.sensorform.value);
  }

  newSensorInfo = [];

  addSensor() {
    this.newSensorInfo.push(this.newSensorInfo.length)
  }
}
