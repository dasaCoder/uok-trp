import { Injectable } from '@angular/core';

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
    for (let x = 0; x < vehicle_arr.length; x++) {
      if (vehicle_arr[x][key] === value) {
        return vehicle_arr[x]['vehicles'] ;
      }
    }
  }
  constructor() { }

}
