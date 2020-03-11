import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-ng-data-table',
  templateUrl: './ng-data-table.component.html',
  styleUrls: ['./ng-data-table.component.scss']
})
export class NgDataTableComponent implements OnInit {

  constructor() { }
  @Input() columns: Array<any> = [];

  @Input() columnsLength: number;

  @Input() rows: Array<any> = [];

  @Output() editEvent = new EventEmitter();

  @Output() showDetailEvent = new EventEmitter();

  ngOnInit() {
    console.log('in table' + this.columns);
    console.log('in table' + this.rows)
  }
  echo(row, column): string {
    if (column.key !== '' && typeof row[column.key] !== 'undefined') {
      return row[column.key];
    } else if (column.defaultValue !== '') {
      return column.defaultValue;
    }
    return '';
  }
  edit(row: any) {
    this.editEvent.emit(row);
  }
  showDetails(row: any) {
    this.showDetailEvent.emit(row);
  }

}
