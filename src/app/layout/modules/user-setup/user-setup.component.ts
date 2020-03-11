import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.scss']
})
export class UserSetupComponent implements OnInit {

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
  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }
}
