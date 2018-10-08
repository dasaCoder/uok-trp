import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AvailableVehicleService {
  vehicles = [
    {
      date: '2/5/2018',
      vehicles: [
        {
          type: 'car',
          left: 5
        },
        {
          type: 'van',
          left: 3
        }

      ]
    },
    {
      date: '2/26/2018',
      vehicles: [
        {
          type: 'car',
          left: 8
        },
        {
          type: 'van',
          left: 13
        }

      ]
    }
  ];
  get_free_vehicles(value) {
    return this.find_free_vehicle_on_day(this.vehicles, 'date', value);
  }

  find_free_vehicle_on_day( vehicle_arr , key , value) {
    this.http.get('https://uok-transport-division.herokuapp.com/vehicles/all_vehicles')
      .subscribe(response => {
        console.log(response['msg']);
      });
    for (let x = 0; x < vehicle_arr.length; x++) {
      if (vehicle_arr[x][key] === value) {
        return vehicle_arr[x]['vehicles'] ;
      }
    }
  }
  constructor(private http: HttpClient) {
  }

}
