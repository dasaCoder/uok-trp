import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  login(body) {
    // console.log(body);
    return this.http.post('https://uok-transport-division.herokuapp.com/requests/getStatus', body);
  }
  isLoggedIn(): boolean {
    if(localStorage.getItem('token') === null){
      //alert('not logged in');
      return false;
    } else{
      let jwtHelper = new JwtHelper();
      let token = localStorage.getItem('token');
      let token_decoded = jwtHelper.decodeToken(token);
      if ( token_decoded) {
        console.log('true');
        return true;
      }
      return false;
    }

  }
  isLoggedInWithRefno(refNo): boolean {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    let token_decoded = jwtHelper.decodeToken(token);

    if ( token_decoded && token_decoded['refNo'] === refNo) {
      // console.log('true');
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
  get_refNo() {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    let token_decoded = jwtHelper.decodeToken(token);
    return token_decoded['refNo'];
  }

}
