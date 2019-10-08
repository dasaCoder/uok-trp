 import { Injectable } from '@angular/core';
import {Request} from '../classes/request';
import { StatusEnum} from '../classes/status';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class RequestService {

  url = "https://uok-transport-division.herokuapp.com/requests";

  constructor(private http: HttpClient) { }
  getOneRequest(refNo) {
    return this.http.get(`${this.url}/get/${refNo}` );
  }
  getOneReq_for_user(refNo, password) {
    return this.http.get(`${this.url}/get_for_user/${refNo}/${password}` );
  }
  addRequest(request: Request) {
    // this.requests.push(request);
    return this.http.post(`${this.url}/add`, request );
  }
  get_not_considered_requests() {
    return this.http.get(`${this.url}/get_not_considered_requests`);
  }
  change_status(refNo, status) {
    return this.http.get(`${this.url}/status/` + refNo + `/` + status);
  }
  add_more_details(request: Request) {
    return this.http.post(`${this.url}/more_details`, request);
  }
  get_active_req() {
    return this.http.get(`${this.url}/active_requests`);
  }
  get_status(refNo, password) {
    // console.log(refNo, password);
    return this.http.get(`${this.url}/getStatus/` + refNo + '/' + password);
  }

}
