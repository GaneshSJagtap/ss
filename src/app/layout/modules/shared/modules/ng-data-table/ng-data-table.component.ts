import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  QueryList,
  ElementRef
} from "@angular/core";
import { StorageService } from "../../providers/storage.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-ng-data-table",
  templateUrl: "./ng-data-table.component.html",
  styleUrls: ["./ng-data-table.component.scss"]
})
export class NgDataTableComponent implements OnInit {
  private _filterInputsEl: QueryList<ElementRef>;
  public href: string = "";
  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  @Input() columns: Array<any> = [];

  @Input() columnsLength: number;

  @Input() rows: Array<any> = [];
  @Input() perPage: number = 10;
  @Input() first: number = 1;
  @Input() last: number = 1;
  @Input() totalRows: number = 0;
  @Input() isAjax: boolean = false;

  @Output() showDetailEvent = new EventEmitter();
  @Output("paginateRecords") paginateRecordEvent = new EventEmitter<any>();
  @Output("searchByColumn") searchByCol = new EventEmitter<any>();
  @Output("onSearch") getDetails = new EventEmitter<any>();
  @Input() hasActionButtons: boolean = true;
  @Input() hasActionsDeleteFile: boolean = false;
  @Input() hasActionsEdit: boolean = false;
  @Input() hasActions: boolean = false;
  @Output("rLink") _rlink = new EventEmitter<any>();
  @Output("paginateRecords") paginateRecordsEvent = new EventEmitter<any>();
  @Input("perPageData") perPageData: number = 10;
  @Output("edit") editEvent = new EventEmitter<any>();

  allRows: Array<any> = [];
  paginateRows: Array<any> = [];
  sortColumn: string = "";
  isDesc: Boolean = false;
  direction: number;
  isRecordsSearch: boolean = false;
  showView: boolean = true;
  showEdit: boolean = true;
  showDelete: boolean = true;
  columnKeys: Array<string> = [];
  ngOnInit() {
    // console.log('in table' + this.columns);
    // console.log('in table' + this.rows);
    this.buildColumnsKeys();
    this.first = StorageService.get("firstStart");
    this.last = StorageService.get("lastEnd");
  }

  /**
   * Echo Value
   *
   * @param row, column
   */
  echo(row, column): string {
    if (column.key !== "" && typeof row[column.key] !== "undefined") {
      return row[column.key];
    } else if (column.defaultValue !== "") {
      return column.defaultValue;
    }
    return "";
  }

  edit() {
    this._router.navigate(["/facility/add-facility"]);
    // this.editEvent.emit(row);
    // console.log("Edit");
  }
  showDetails(row: any) {
    this.showDetailEvent.emit(row);
  }

  /**
   * Paginate Records
   * @param pageNumber
   */
  paginateRecords(pageNumber: number) {
    if (this.isAjax === false) {
      --pageNumber;
      let start = pageNumber * this.perPage;
      let end = (pageNumber + 1) * this.perPage;
      this.rows = this.paginateRows.slice(start, end);
      this.first = start + 1;
      this.last = end < this.totalRows ? end : this.totalRows;
    } else {
      this.paginateRecordEvent.emit(pageNumber);
    }
  }

  /**
   * Sorting event
   * @param property
   */
  sort(property: string) {
    this.isDesc = !this.isDesc; //change the direction
    this.sortColumn = property;
    this.direction = this.isDesc ? 1 : -1;
    let sortRows =
      this.isRecordsSearch === false ? this.allRows : this.paginateRows;
    if (this.isAjax === false) {
      sortRows.sort((a, b) => {
        if (a[property] < b[property]) {
          return -1 * this.direction;
        } else if (a[property] > b[property]) {
          return 1 * this.direction;
        } else {
          return 0;
        }
      });
      this.rows = sortRows;
      if (this.isRecordsSearch === false) {
        this.paginateRows = sortRows;
      }

      this.paginateRecords(1);
      this.setPage(1);
    } else {
    }
  }

  /**
   * Records Per Page Selection Event
   *
   * @param event
   */

  onPerPage(event) {
    this.perPage = parseInt(event.target.value);
    this.perPage = parseInt(event.target.value, 10);
    this.perPageData = this.perPage;
  }

  /**
   * @param pageNumber
   */

  setPage(pageNumber: number) {}

  /**
   * Track rows in ngFor
   *
   * @param index, item
   */
  trackByFn(index, item) {
    return index;
  }
  searchObj;
  searchByColumn(columnkey) {
    let searchResult = null;
    let searchValue = "";
    let searchValues: Array<any> = [];
    let columnSearchKey: Array<any> = [];
    if (this.isAjax === false) {
      if (typeof this._filterInputsEl !== "undefined") {
        this._filterInputsEl.forEach((el: ElementRef) => {
          if (el.nativeElement.value.trim() !== "") {
            if (el.nativeElement.attributes[4] != undefined) {
              let searchObj = {
                columnkey: el.nativeElement.attributes[4].nodeValue,
                searchValue: el.nativeElement.value.replace(/\s/g, "")
              };
              columnSearchKey.push(searchObj);
            } else {
              let searchObj = {
                columnkey: "global",
                searchValue: el.nativeElement.value.replace(/\s/g, "")
              };
              columnSearchKey.push(searchObj);
            }
          }
        });
      }
      this.searchObj = {
        globalSearchValue: searchValue,
        fields: columnSearchKey,
        pageNumber: 1
      };
      this.onSearch(this.searchObj);
    }
  }

  onSearch(searchData) {
    this.getDetails.emit(searchData);
  }
  goToLink(row: any, column: any) {
    // this.href = this.activatedRoute.snapshot.url[0].path;

    if (column.link === true) {
      let routeData = {
        row: row,
        columnkey: column.key
      };
      this._rlink.emit(routeData);
    }
  }
  buildColumnsKeys() {
    if (this.columns.length > 0) {
      for (var i = 0; i < this.columns.length; i++) {
        this.columnKeys.push(this.columns[i].key);
      }
    }
  }
}
