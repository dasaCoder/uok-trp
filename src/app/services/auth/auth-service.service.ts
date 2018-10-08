import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  adminLogin(username, password){
    let user = {
      username: username,
      password: password
    };
    return this.http.post(`https://uok-transport-division.herokuapp.com/login`, user);
  }

}
