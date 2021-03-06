import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Driver} from '../classes/driver';
import {Vehicle} from '../classes/vehicle';

@Injectable()
export class AdminService {
  public url;
  public token: string;
  public headers;
  constructor(private http: HttpClient) {
    this.url = 'https://uok-transport-division.herokuapp.com/admin';
    this.token = 'Bearer ' + localStorage.getItem('token');
    this.headers = new HttpHeaders();
    this.headers.set('authorization', this.token);
  }

  adminLogin(username, password){
    let user = {
      username: username,
      password: password
    };
    return this.http.post(`https://uok-transport-division.herokuapp.com/login`, user);
  }

  adminLogOut(){

  }

  // add new admin user
  addAdmin(admin) {
      return this.http.post(`${this.url}/admin`, admin, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      })
  }

  // change admin password
  // @param _id
  // @param oldpassword, newPassword
  changeAdminPassword(obj) {
    return this.http.post(`${this.url}/password/change`, obj, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    })
  }

  // return list of drivers (just names)
  getDrivers() {
    //let headers = new HttpHeaders();
    //let token = 'Bearer ' + localStorage.getItem('token');
    //this.headers.append('Authentication', token);
    return this.http.get(`${this.url}/driver`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // return one driver
  getDriver(_id: String) {
    return this.http.get(`${this.url}/driver/get?_id=${_id}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // update a reqeust
  updateRequest(request) {
    return this.http.post(this.url + '/requests/update', request, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    });
  }

  getAllDriversDetails() {
    return this.http.get(`${this.url}/get_all_driver_details`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  getVehicle_to_req() {
    return this.http.get(`${this.url}/get_vehicle_list`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  setDriver(refNo, _id) {
    return this.http.post(`${this.url}/driver/set_driver`, {refNo: refNo, _id: _id}, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  set_vehicle(refNo, _id) {
    return this.http.get(`${this.url}/vehicle/set_vehicle/?refNo=${refNo}&_id=${_id}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // add new maintenece details for given vehicle
  addMainteneceDetails(_id, details) {

    let body = {
      'status': details['status'],
      'reason': details['reason'],
      'vehicle': details['vehicle'],
      'arrival': details['arrival'],
      'departure': details['departure']
    };

    return this.http.post( `${this.url}/vehicle/maintenance/add?_id=${_id}`, body, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    });
  }

  // get list of vehicls on status (repair)
  getVehicleListOnStatus(status) {
  return this.http.get( this.url + `/vehicle/maintenance/get?status=${status}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      });
  }

  // get repair history for given vehicle
  getRepairHistory(_id) {
    return this.http.get( this.url + `/../vehicles/maintenance/single/get?_id=${_id}`, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    });
  }

  // get suggested vehicles for given request
  getSuggestedVehicles(_id) {
    return this.http.get( this.url + `/../vehicles/suggestions?_id=${_id}`, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    });
  }

  // update repair history record
  updateRepairHistoryRecord(_id, newRec) {
    console.log("_ID", _id);
    return this.http.post( this.url + `/../vehicles/maintenance/update?_id=${_id}`, newRec, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    });
  }

  get_request_list(status) {
    return this.http.get(`${this.url}/get_request_list/?status=${status}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // return list of reqeust on given status/s
  // formatted for sheduler in admin dasboard
  // param array of status eg:- status[0] = "1"
  getRequestOnStatusForCalender(status) {
    return this.http.get(`${this.url}/requests/status?${status}`, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    } )
                      .toPromise()
                      .then(res => <any[]> res)
                      .then(data => {

                        var dataM = [];

                        if(data['msg'] === undefined) {
                          return;
                        }

                        data['msg'].forEach(element => {

                          let color = '';
                          switch ( element['status']) {
                            case '0':
                              color = '#1A73E8'; // new request
                              break;
                            case '1':
                              color = '#1E8E3E'; // accepted
                              break;
                            case '2':
                              color = '#FA7B17'; // confirmed
                              break;
                            case '3':
                              color = '#A142F4'; // authenticate
                              break;
                          }

                          dataM.push(
                            {
                              'title': 'TRP/' + element['refNo'],
                              'start': new Date(element['departure']['pickupDate'] + ' ' + element['departure']['pickupTime']),
                              'end' : new Date(element['arrival']['dropDate'] + ' ' + element['arrival']['dropTime']),
                              'color' : color,
                              'weekends': 'true'
                            }
                          );

                        });

                        //let x = [];

                        return dataM;
                      });
  }

  // return array of requests
  getRequestsOnStatusForTable(status) {
    return this.http.get(`${this.url}/requests/status?${status}`, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    } )
                      .toPromise()
                      .then(res => <any[]> res)
                      .then(data => {
                        var dataT = [];

                        if(data['msg'] === undefined) {
                          return;
                        }

                        data['msg'].forEach(element => {


                          dataT.push({
                            'refNo'   : element['refNo'],
                            'to'      : element['departure']['pickupPoint'],
                            'from'    : element['departure']['dropPoint'],
                            'driver'  : (element['driver'] !== undefined )? element['driver']['name'] : 'Not assigned',
                            'vehicle' : (element['vehicle'] !== undefined)? element['vehicle']['vehicle_no'] : 'Not assigned'
                          });

                        });

                        return dataT;
                      });
  }

    // return array of requests
    getRequestsOnDayForTable(date) {
      return this.http.get(`${this.url}/get_requests_on_date?date=${date}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } )
                        .toPromise()
                        .then(res => <any[]> res)
                        .then(data => {
                          var dataT = [];

                          if(data['data'] === undefined) {
                            return;
                          }

                          data['data'].forEach(element => {


                            dataT.push({
                              'refNo'   : element['refNo'],
                              'to'      : element['departure']['pickupPoint'],
                              'from'    : element['departure']['dropPoint'],
                              'driver'  : (element['driver'] !== undefined )? element['driver']['name'] : 'Not assigned',
                              'vehicle' : (element['vehicle'] !== undefined)? element['vehicle']['vehicle_no'] : 'Not assigned'
                            });

                          });

                          return dataT;
                        });
    }

  /*
  *  get request on vehicle
  * */
  getRequestsOnVehicleForCalender(_id) {
    return this.http.get(`${this.url}/requests/vehicle?_id=${_id}`, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    } )
    .toPromise()
                      .then(res => <any[]> res)
                      .then(data => {

                        var dataM = [];

                        console.log(data);
                        if(data['msg'] === undefined) {
                          return;
                        }

                        data['msg'].forEach(element => {

                          let color = '';
                          switch ( element['status']) {
                            case '0':
                              color = '#1A73E8';
                              break;
                            case '1':
                              color = '#1E8E3E';
                              break;
                            case '2':
                              color = '#FA7B17';
                              break;
                            case '3':
                              color = '#A142F4';
                              break;
                          }

                          dataM.push(
                            {
                              'title': 'TRP/' + element['refNo'],
                              'start': new Date(element['departure']['pickupDate'] + ' ' + element['departure']['pickupTime']),
                              'end' : new Date(element['arrival']['dropDate'] + ' ' + element['arrival']['dropTime']),
                              'color' : color,
                              'weekends': 'true'
                            }
                          );

                        });

                        //let x = [];

                        return dataM;
                      });
  }

  /*
*  get request on driver
* */
  getRequestsOnDriverForCalender(_id) {
    return this.http.get(`${this.url}/requests/driver?_id=${_id}`, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    } )
    .toPromise()
                      .then(res => <any[]> res)
                      .then(data => {

                        var dataM = [];

                        data['msg'].forEach(element => {

                          let color = '';
                          switch ( element['status']) {
                            case '0':
                              color = '#1A73E8';
                              break;
                            case '1':
                              color = '#1E8E3E';
                              break;
                            case '2':
                              color = '#FA7B17';
                              break;
                            case '3':
                              color = '#A142F4';
                              break;
                          }

                          dataM.push(
                            {
                              'title': 'TRP/' + element['refNo'],
                              'start': new Date(element['departure']['pickupDate'] + ' ' + element['departure']['pickupTime']),
                              'end' : new Date(element['arrival']['dropDate'] + ' ' + element['arrival']['dropTime']),
                              'color' : color,
                              'weekends': 'true'
                            }
                          );

                        });

                        //let x = [];

                        return dataM;
                      });
  }

  getRequestList(vehicle_no) {
    return this.http.get(`${this.url}/get_request_on_vehicle?vehicle_no=${vehicle_no}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }
  // get list of request of a driver on a current day
  getRequestOfDriverOnDay(_id){
    return this.http.get(`${this.url}/get_driver_request_on_day?_id=${_id}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  getRequestOfDriverOnDayForTable(_id){
    return this.http.get(`${this.url}/get_driver_request_on_day?_id=${_id}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } )
                        .toPromise()
                        .then(res => <any[]> res)
                        .then(data => {
                          var dataT = [];

                          if(data['data'] === undefined) {
                            return;
                          }

                          data['data'].forEach(element => {


                            dataT.push({
                              'refNo'   : element['refNo'],
                              'to'      : element['departure']['pickupPoint'],
                              'from'    : element['departure']['dropPoint'],
                              'driver'  : (element['driver'] !== undefined )? element['driver']['name'] : 'Not assigned',
                              'vehicle' : (element['vehicle'] !== undefined)? element['vehicle']['vehicle_no'] : 'Not assigned'
                            });

                          });

                          return dataT;
                        });
  }

  /*
  * get list of reqeust of a driver for a given month
  * */
  getRequestOfDriverOnMonth(_id) {
    let date = new Date();
    let real_date = `${date.getFullYear()}-${date.getMonth() + 1}-1`;
    console.log(date);
    return this.http.get(`${this.url}/get_driver_request_on_month?_id=${_id}&month_f_d=${real_date}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  getRequestOfDriverOnMonthForTable(_id) {
    let date = new Date();
    let real_date = `${date.getFullYear()}-${date.getMonth() + 1}-1`;
    console.log(date);
    return this.http.get(`${this.url}/get_driver_request_on_month?_id=${_id}&month_f_d=${real_date}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } )
                              .toPromise()
                        .then(res => <any[]> res)
                        .then(data => {
                          var dataT = [];

                          if(data['data'] === undefined) {
                            return;
                          }

                          data['data'].forEach(element => {


                            dataT.push({
                              'refNo'   : element['refNo'],
                              'to'      : element['departure']['pickupPoint'],
                              'from'    : element['departure']['dropPoint'],
                              'driver'  : (element['driver'] !== undefined )? element['driver']['name'] : 'Not assigned',
                              'vehicle' : (element['vehicle'] !== undefined)? element['vehicle']['vehicle_no'] : 'Not assigned'
                            });

                          });

                          return dataT;
                        });
  }

  /// add a new driver
  addDriver(driver: Driver) {
    return this.http.post(`${this.url}/driver`, driver, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  /// get list of drivers
  getListOfVehicles() {
    return this.http.get(`${this.url}/get_vehicle_list`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // add vehicle

  addVehicle(vehicle: Vehicle) {
    // console.log(vehicle);
    return this.http.post(`${this.url}/addVehicle`, vehicle, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }


  // get list of requests for given date

  getRequestListOnDay(date){
    return this.http.get(`${this.url}/get_requests_on_date?date=${date}`, {
        headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
      } );
  }

  // get details of a vehicle by vehicle number

  getVehicle(vehicle_no){
    return this.http.get(`${this.url}/getVehicle?vehicle_no=${vehicle_no}`,{
      headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token),
    });
  }
}
