import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable} from 'rxjs';
// import { policyService } from '../in-memary-serivce/policy.service'


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    SERVER_URL = 'api/policies';
    httpOptions: any;

    constructor(private httpClient: HttpClient) {
        let token = 'Bearer ';
        this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': token
        })
      };
    }

    public getPolicies() {
        return this.httpClient.get(this.SERVER_URL);
    }

  get(url) {
     return this.httpClient.get(url, this.httpOptions);
  }

  post(url , requestBody) {
     return this.httpClient.post(url, requestBody, this.httpOptions);
  }

  put(url , requestBody) {
     return this.httpClient.put(url, requestBody, this.httpOptions);
  }

  delete(url) {
     return this.httpClient.delete(url, this.httpOptions);
  }
}


