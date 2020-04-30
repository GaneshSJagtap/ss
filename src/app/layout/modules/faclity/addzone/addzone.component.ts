import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';



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


@Component({
  selector: 'app-addzone',
  templateUrl: './addzone.component.html',
  styleUrls: ['./addzone.component.scss']
})
export class AddzoneComponent implements OnInit {

  zoneform: FormGroup;
  zoneList: FormArray;
  newZoneInfo = [];

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
  facilities: Facility[] = [
    { name: 'Facility 1' },
    { name: 'Facility 2' },
    { name: 'Facility 3' },
    { name: 'Facility 4 ' }
  ];
  // facilities = [];

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

  constructor(private fBuilder: FormBuilder) { }


  ngOnInit() {
    this.zoneform = this.fBuilder.group({
      facilityId: [''],
      buildingId: [''],
      zoneDetails: this.fBuilder.array([this.createZone()])
    });
    this.zoneList = this.zoneform.get('zoneDetails') as FormArray
  }
  get zoneFormGroup() {
    return this.zoneform.get('zoneDetails') as FormArray
  }

  createZone() {
    return this.fBuilder.group({
      floornumber: [''],
      roomZone: ['']
    })
  }

  facilityId = new FormControl('', [
    Validators.required
  ]);
  buildingID = new FormControl('', [
    Validators.required
  ]);
  floornumber = new FormControl('', [
    Validators.required
  ]);
  roomZone = new FormControl('', [
    Validators.required
  ]);

  addZone() {
    this.newZoneInfo.push(this.newZoneInfo.length);
    this.zoneList.push(this.createZone());
  }

  // zoneform = new FormGroup({
  //   buildingname: new FormControl(),
  //   facilityname: new FormControl(),
  //   floornumber: new FormControl()
  // });

  zoneFormSubmit() {
    if (this.zoneform.invalid) {
      return;
    }
    console.log(this.zoneform.value);
  }

}
