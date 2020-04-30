import { Component, OnInit, ElementRef } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  status: boolean = false;
  dropdownStatus: boolean = false;
  collapsedWindow: boolean = false;

  constructor(
    private _eref: ElementRef,
    private sharedService: SharedService

  ) { }

  ngOnInit() {
  }

  //hamburgerIconToggle Function

  hamburgerIconToggle(): void {
    this.status = !this.status;
    this.sharedService.setToggle(this.collapsedWindow)
    // this.sharedService.closeSidebar(this.collapsedWindow)
  }
  profileDropdownMenuToggle() {
    this.dropdownStatus = !this.dropdownStatus;
  }
  onClickedOutside(e: Event) {
    this.dropdownStatus = false;
  }

}
