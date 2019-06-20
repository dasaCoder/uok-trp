import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }
  // return vehicle list for notice board
  get_vehicle_list() {
    return this.http.get('https://uok-transport-division.herokuapp.com/vehicles/all_vehicles');
  }
  // return vehicle list for admin request view
  get_vehicle_list_admin(){
    return this.http.get('https://uok-transport-division.herokuapp.com/vehicles')
              .toPromise()
              .then(res => <any[]> res)
              .then(data => {
                var dataT = [];

                if(data['msg'] === undefined) {
                  return;
                }

                /*data['msg'].forEach(element => {


                  dataT.push({
                    'refNo'   : element['refNo'],
                    'to'      : element['departure']['pickupPoint'],
                    'from'    : element['departure']['dropPoint'],
                    'driver'  : (element['driver'] !== undefined )? element['driver']['name'] : 'Not assigned',
                    'vehicle' : (element['vehicle'] !== undefined)? element['vehicle']['vehicle_no'] : 'Not assigned'
                  });

                }); */
console.log('vehicle dataT',dataT);
                return dataT;
              });
  }

}
