import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  login(body) {
    console.log(body);
    return this.http.post('http://localhost:3000/requests/getStatus', body);
  }
  isLoggedIn(): boolean {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    let token_decoded = jwtHelper.decodeToken(token);
        if ( token_decoded) {
          console.log('true');
          return true;
        }
        return false;
  }
  logout() {
    localStorage.removeItem('token');
  }
  get_status() {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    let token_decoded = jwtHelper.decodeToken(token);
    return token_decoded['status'];
  }

}
