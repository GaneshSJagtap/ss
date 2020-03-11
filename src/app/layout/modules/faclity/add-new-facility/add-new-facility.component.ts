import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { UrlDetails } from '../../../../contants/url-details';

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
  selector: 'app-add-new-facility',
  templateUrl: './add-new-facility.component.html',
  styleUrls: ['./add-new-facility.component.scss']
})
export class AddNewFacilityComponent implements OnInit {
  title = 'Add Facility';

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

  facilityform = new FormGroup({
    facilityName: new FormControl(),
    contactName: new FormControl(),
    contactnumber: new FormControl(),
    country: new FormControl(),
    state: new FormControl(),
    city: new FormControl(),
    zipCode: new FormControl(),
    address: new FormControl()
  });


  buildingform = new FormGroup({
    buildingname: new FormControl(),
    facilityname: new FormControl(),
    floornumber: new FormControl()
  });
  constructor(public httpService: HttpService, public router: Router) { }

  ngOnInit() {
    this.populateFacilities();
  }

  buildingFormSubmit() {
    if (this.buildingform.invalid) {
      return;
    }
    console.log(this.buildingform.value);
  }

  facilitySubmitForm() {
    if (this.facilityform.invalid) {
      return;
    }
    this.facilityform.value.country = this.facilityform.value.country.name;
    this.facilityform.value.state = this.facilityform.value.state.name;
    this.facilityform.value.city = this.facilityform.value.city.name;
    this.createNewFacility(this.facilityform.value);
  }

  // Register a new Facility; HTTP POST Request
  createNewFacility(facilityDetails) {
    this.httpService.post(UrlDetails.facility, facilityDetails)
      .subscribe((response) => {
        this.populateFacilities();
        this.facilityform.reset();
        this.router.navigate(['/facility/add-facility']);
      },
        (error) => {
          console.error(error);
        });
  }

  // Populate New Facility list
  populateFacilities() {
    this.httpService.get(UrlDetails.facility)
      .subscribe((res) => {
        this.facilities = (res as any);
      });
  }
  cancelFacilityForm() {
    this.facilityform.reset();
  }

  cancelBuildingForm() {
    this.buildingform.reset();
  }

}
