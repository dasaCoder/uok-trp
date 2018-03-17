import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {

  }
  getDrivers(){
    return this.http.get('http://localhost:3000/admin/driver');
  }

}
