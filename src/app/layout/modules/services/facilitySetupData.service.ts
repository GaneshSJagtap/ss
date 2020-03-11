import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { facilitySetup } from '../models/facilitySetupData';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API_URL = "./assets/data.json";

  dataChange: BehaviorSubject<facilitySetup[]> = new BehaviorSubject<facilitySetup[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) { }

  get data(): facilitySetup[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }
  getAllUsers(): void {
    this.httpClient.get<facilitySetup[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + " " + error.message);
      }
    );
  }

  addUser(user: facilitySetup): void {
    this.dialogData = user;
  }

  updateUser(user: facilitySetup): void {
    this.dialogData = user;
  }

  deleteUser(id: number): void {
    console.log(id);
  }
}
