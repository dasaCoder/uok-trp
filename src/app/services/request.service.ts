import { Injectable } from '@angular/core';
import {Request} from '../classes/request';
import { StatusEnum} from '../classes/status';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) { }
  getOneRequest(refNo) {
    return this.http.get(`http://localhost:3000/requests/get/${refNo}` );
  }
  getOneReq_for_user(refNo, password) {
    return this.http.get(`http://localhost:3000/requests/get_for_user/${refNo}/${password}` );
  }
  addRequest(request: Request) {
    // this.requests.push(request);
    this.http.post('http://localhost:3000/requests/add', request )
      .subscribe(response => {
        console.log(response);
      });
  }
  get_not_considered_requests() {
    return this.http.get('http://localhost:3000/requests/get_not_considered_requests');
  }
  change_status(refNo, status) {
    return this.http.get('http://localhost:3000/requests/status/' + refNo + '/' + status);
  }
  add_more_details(request: Request) {
    return this.http.post('http://localhost:3000/requests/more_details', request);
  }
  get_active_req(){
    return this.http.get('http://localhost:3000/requests/active_requests');
  }
  get_status(refNo, password) {
    // console.log(refNo, password);
    return this.http.get('http://localhost:3000/requests/getStatus/' + refNo + '/' + password);
  }

}
