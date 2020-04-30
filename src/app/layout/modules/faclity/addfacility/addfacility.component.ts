import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpService } from 'src/app/layout/services/http.service';
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
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.scss']
})
export class AddfacilityComponent implements OnInit {

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

  facilities = [];

  constructor(public httpService: HttpService, public router: Router) { }
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

  ngOnInit() {
  }

  facilitySubmitForm() {
    if (this.facilityform.invalid) {
      return;
    }
    this.createNewFacility(this.facilityform.value);
  }

  // Register a new Facility; HTTP POST Request
  createNewFacility(facilityDetails) {
    this.httpService.post(UrlDetails.facility, facilityDetails)
      .subscribe((response) => {
        this.facilityform.reset();
        this.router.navigate(['/facility/add-facility']);
      },
        (error) => {
          console.error(error);
        });
  }

  cancelFacilityForm() {
    this.facilityform.reset();
  }
  facilityName = new FormControl('', [
    Validators.required
  ])
  contactName = new FormControl('', [
    Validators.required
  ])
  contactnumber = new FormControl('', [
    Validators.required
  ])
  country = new FormControl('', [
    Validators.required
  ])
  address = new FormControl('', [
    Validators.required
  ])

}
