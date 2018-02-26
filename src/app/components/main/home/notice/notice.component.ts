import { Component, OnInit } from '@angular/core';
import {sameCharsOnly} from '@progress/kendo-angular-dropdowns/dist/npm/util';
import {AvailableVehicleService} from '../../../../services/available-vehicle.service';
import {slide} from '../../../../animations';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  animations: [
    slide
  ]
})
export class NoticeComponent implements OnInit {
  selectedDate = new Date() ;
  newSelectedDate: string;
  availableVehicles;

  constructor(private availableVehicleService: AvailableVehicleService) { }

  ngOnInit() {
  }

  picker() {
    this.newSelectedDate = this.selectedDate.toLocaleDateString();
    this.availableVehicles = this.availableVehicleService.get_free_vehicles(this.newSelectedDate);
      }


}
