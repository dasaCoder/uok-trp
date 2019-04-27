import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthServiceService {

  public url;
  constructor(private http: HttpClient) {
    this.url = 'https://uok-transport-division.herokuapp.com';
   }

  adminLogin(username, password){
    let user = {
      username: username,
      password: password
    };
    return this.http.post(`${this.url}/login`, user);
  }


  driverLogin(username, password) {
    let user = {
      username: username,
      password: password
    };

    return this.http.post(`${this.url}/driver/login`, user);
  }

}
