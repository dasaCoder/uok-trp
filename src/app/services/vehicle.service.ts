import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }
  get_vehicle_list() {
    return this.http.get('http://localhost:3000/vehicles/all_vehicles');
  }

}
