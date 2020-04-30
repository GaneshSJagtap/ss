import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/layout/services/http.service';
import { UrlDetails } from '../../../../contants/url-details';

interface Floor {
  name: string;
}

@Component({
  selector: 'app-addbuilding',
  templateUrl: './addbuilding.component.html',
  styleUrls: ['./addbuilding.component.scss']
})
export class AddbuildingComponent implements OnInit {

  facilities = [];

  floors: Floor[] = [
    { name: 'Floor 1' },
    { name: 'Floor 2' },
    { name: 'Floor 3' },
    { name: 'Floor 4' },
  ];

  buildingform: FormGroup;
  buildingList: FormArray;


  constructor(public httpService: HttpService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildingform = this.formBuilder.group({
      facilityId: [''],
      buildingDetails: this.formBuilder.array([this.createBuilding()])
    });
    this.populateFacilities();

    // Set buildingList to form control containing buildings
    this.buildingList = this.buildingform.get('buildingDetails') as FormArray;
  }

  // Get buildings array
  get buildingFormGroup() {
    return this.buildingform.get('buildingDetails') as FormArray;
  }

  // To add more buildings in Facility
  createBuilding(): FormGroup {
    return this.formBuilder.group({
      buildingName: [''],
      floorNumber: ['']
    });
  }
  cancelBuildingForm() {
    this.buildingform.reset();
  }

  buildingFormSubmit() {
    if (this.buildingform.invalid) {
      return;
    }

    this.httpService.post(UrlDetails.building, this.buildingform.value).subscribe(response => {
      this.buildingform.reset();
      // Show information for successful form submission
      console.log('Building registered!');
    }, err => {
      console.log(`Some error occured! ${err}`);
    });
  }

  addBuilding() {
    this.buildingList.push(this.createBuilding());
  }

  // Populate New Facility list
  populateFacilities() {
    this.httpService.get(UrlDetails.facility)
      .subscribe((res) => {
        this.facilities = (res as any);
      });
  }

  facilityId = new FormControl('', [
    Validators.required
  ]);
  buildingName = new FormControl('', [
    Validators.required
  ]);
  floorNumber = new FormControl('', [
    Validators.required
  ])
}
