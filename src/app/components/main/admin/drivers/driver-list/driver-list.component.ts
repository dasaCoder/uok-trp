import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';

export class Driver {
  constructor(public name: string, public id: string, public flag: string) { }
}

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

 // @Input() requests;

  refNo;
  requests: any[];
  options: any = [];
  drivers: any[] = [];
  clickedItem;
  selectedDriverName;

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  filterStates(name: string) {
    return this.drivers.filter(state =>{
      console.log("d",state);

      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
    })
      
  }

  constructor(private adminService: AdminService) { 
  }

  ngOnInit() {

    this.adminService.getAllDriversDetails()
    .subscribe( drivers => {

        this.drivers = drivers['msg'];
        console.log("drifers",this.drivers);
        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
          .pipe(
            startWith(''),
            map(state => state ? this.filterStates(state) : this.drivers.slice())
          );
    } );
  }

  selectDriver (driver) {
    //alert(driver['name']);
    this.clickedItem = driver['_id'];
    this.selectedDriverName = driver['name'];

    this.requests = undefined;

    this.adminService.getRequestsOnDriverForCalender(this.clickedItem)
        .then( events => {

          this.requests = events;
        } );

        this.options = {
          weekends: true,
          header: {
              left: 'prev,next',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          }
        };

  }

  onSelectDriver(e,driver) {
    console.log("driver",e);
  }

  displayFn(driver): string {
    return driver? driver.name: driver;
  }

}
