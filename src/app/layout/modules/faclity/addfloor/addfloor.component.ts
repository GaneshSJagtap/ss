import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-addfloor',
  templateUrl: './addfloor.component.html',
  styleUrls: ['./addfloor.component.scss']
})
export class AddfloorComponent implements OnInit {

  floorform: FormGroup;
  floorList: FormArray;

  newFloorInfo = [];

  constructor(public fBuilder: FormBuilder) { }


  ngOnInit() {
    this.floorform = this.fBuilder.group({
      facilityId: [''],
      buildingId: [''],
      floorDetails: this.fBuilder.array([this.createFloors()])
    });
    this.floorList = this.floorform.get('floorDetails') as FormArray;
  }
  get floorFormGroup() {
    return this.floorform.get('floorDetails') as FormArray
  }

  createFloors() {
    return this.fBuilder.group({
      floorName: [''],
      floorNumber: [''],
      floorMap: ['']
    });
  }

  addFloor() {
    this.newFloorInfo.push(this.newFloorInfo.length);
    this.floorList.push(this.createFloors());
  }

  floorformFormSubmit() {
    if (this.floorform.invalid) {
      return;
    }
    console.log(this.floorform.value);
  }

}
