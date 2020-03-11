import { Component, OnInit } from '@angular/core';
import { SharedService } from '../layout/modules/shared/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [SharedService]
})
export class LayoutComponent implements OnInit {

  collapsedWindow: boolean = true;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.$toggle.subscribe(val => {
      this.collapsedWindow = !this.collapsedWindow;
    });
  }

}
