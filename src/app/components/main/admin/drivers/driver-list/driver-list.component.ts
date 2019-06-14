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

  states: any[];

  constructor(private adminService: AdminService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  ngOnInit() {

    this.adminService.getAllDriversDetails()
    .subscribe( drivers => {

        this.states = drivers['msg'];
        this.drivers = drivers['msg'];

        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
          .pipe(
            startWith(''),
            map(state => state ? this.filterStates(state) : this.drivers.slice())
          );
    } );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }

  displayFn(state): string {
    return state ? state.name : state;
  }

  getDriver(driver) {
    console.log("seleted driver", driver);
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

}
