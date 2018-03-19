import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }
  // return vehicle list for notice board
  get_vehicle_list() {
    return this.http.get('http://localhost:3000/vehicles/all_vehicles');
  }
  // return vehicle list for admin request view
  get_vehicle_list_admin(){
    return this.http.get('http://localhost:3000/vehicles');
  }

}
