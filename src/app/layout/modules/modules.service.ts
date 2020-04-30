import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ModulesService {
  public activateTheme1 = new Subject<any>();

  constructor() {}

  
}
