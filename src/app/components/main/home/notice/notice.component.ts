import { Component, OnInit } from '@angular/core';
import {sameCharsOnly} from '@progress/kendo-angular-dropdowns/dist/npm/util';
import {AvailableVehicleService} from '../../../../services/available-vehicle.service';
import {slide} from '../../../../animations';
import {filter} from 'rxjs/operators';

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
  newSelectedDate: DateModel = new DateModel();
  availableVehicles;

  constructor(private availableVehicleService: AvailableVehicleService) { }

  ngOnInit() {
  }

  picker() {
    this.newSelectedDate.date = this.selectedDate.getDate();
    this.newSelectedDate.month = this.selectedDate.getMonth() + 1;
    this.newSelectedDate.year = this.selectedDate.getFullYear();

    this.availableVehicles = this.availableVehicleService.get_free_vehicles(`${this.newSelectedDate.date}/${this.newSelectedDate.month}/${this.newSelectedDate.year}`);
    console.log(this.availableVehicles);
      }


}

export class DateModel {
  public date;
  public month;
  public year;
}
