import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {


    constructor(private http: HttpClient, private router: Router) {

    }
}