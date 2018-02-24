import { Component, OnInit } from '@angular/core';
import {sameCharsOnly} from '@progress/kendo-angular-dropdowns/dist/npm/util';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  selectedDate = new Date() ;
  newSelectedDate: string;
  availableVehicles;
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
  constructor() { }

  ngOnInit() {
  }

  picker() {
    this.newSelectedDate = this.selectedDate.toLocaleDateString();
    this.find_free_vehicle_on_day(this.vehicles, 'date', this.newSelectedDate);
    /*console.log(this.vehicles.length)*/
      }
  find_free_vehicle_on_day( vehicle_arr , key , value) {
     for (let x = 0; x < vehicle_arr.length; x++) {
       if (vehicle_arr[x][key] === value) {
         this.availableVehicles = vehicle_arr[x]['vehicles'] ;
       }
     }
  }

}
