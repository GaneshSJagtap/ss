import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headingsection',
  templateUrl: './headingsection.component.html',
  styleUrls: ['./headingsection.component.scss']
})
export class HeadingsectionComponent implements OnInit {
  @Input('heading') heading;
  @Input('breadcrumbs') breadcrumbs;

  constructor() { }

  ngOnInit() {
  }

}
