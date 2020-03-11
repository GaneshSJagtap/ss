import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './facility-setup.component.html',
  styleUrls: ['./facility-setup.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})


export class FacilitySetupComponent implements OnInit {
  title = 'Facility Setup';
  faSearch = faSearch;
  status = false;

  columns: Array<any> = [{ title: 'ID', key: 'id', sortable: false, link: true, },
  { title: 'Number', key: 'num', sortable: false, },
  { title: 'Amount', key: 'amount', sortable: false, },
  { title: 'ClientId', key: 'clientId', sortable: false, },
  { title: 'Description', key: 'description', sortable: false, isTag: false, linkRed: true }
  ];
  policys = [
    { id: 1, num: 'PO1', amount: 1000, userId: 1, clientId: 1, description: 'Insurance policy number PO1' },
    { id: 2, num: 'PO2', amount: 2000, userId: 1, clientId: 2, description: 'Insurance policy number PO2' },
    { id: 3, num: 'PO3', amount: 3000, userId: 1, clientId: 3, description: 'Insurance policy number PO3' },
    { id: 4, num: 'PO4', amount: 4000, userId: 1, clientId: 4, description: 'Insurance policy number PO4' }
  ];


  // public policys
  constructor(
    private router: Router,
    private _eref: ElementRef
  ) { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.status = !this.status;
  }
  gotoaddfacility() {
    alert('Hi');
    this.router.navigate(['/facility-setup/add-facility']);
  }
  onClick() {
    if (!this._eref.nativeElement.contains(event.target)) {
      // this.status = false;
    }
  }
  onClickedOutside(e: Event) {
    this.status = false;
  }
}
