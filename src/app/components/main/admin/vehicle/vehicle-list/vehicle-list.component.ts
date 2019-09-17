import { VehicleService } from './../../../../../services/vehicle.service';
import { Vehicle } from './../../../../../classes/vehicle';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { RepairHistoryComponent } from '../../dashboard/repair-history/repair-history.component';
import { FormControl } from '@angular/forms';
import * as XLSX from 'xlsx';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  @ViewChild('TABLE') table: ElementRef;

  refNo;
  requests: any[];
  options: any = [];
  vehicles: any[] = [];
  clickedItem;
  selectedVehicle: Vehicle;

  // repair history
  repairHistory: any[] = [];
  selectedHistoryRecord;

  // auto complete var
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  states: any[];
  // end auto complete var

  displayedColumns: string[] = ['vehicle_no','vehicle_type'];

  vehicleList: Vehicle[] = [];

  vehicleListDataSource = new MatTableDataSource<Vehicle>(this.vehicleList);

  constructor(
    private vehicleService: VehicleService,
    private adminService: AdminService,
    private dialog: MatDialog
    ) {
      this.stateCtrl = new FormControl();
      this.filteredStates = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(state => state ? this.filterStates(state) : this.states.slice())
        );
     }

  ngOnInit() {

    this.adminService.getVehicle_to_req()
      .subscribe((response => {
        console.log(response['data']);
        this.vehicles = response['data'];
        this.states = response['data'];

        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
          .pipe(
            startWith(''),
            map(state => state ? this.filterStates(state) : this.vehicles.slice())
          );
      }));

      this.vehicleService.getVehicleListForTable()
          .then(vehicles => {
            this.vehicleList = vehicles;
            console.log("vehicle list",this.vehicleList);
            this.vehicleListDataSource.data = this.vehicleList;
          });

  }

  /* auto complete */
  filterStates(name: string) {
    return this.states.filter(state =>
      state['vehicle_no'].toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }

  displayFn(state): string {
    return state ? state['vehicle_no'] : state;
  }

  /* end auto complete */

  selectVehicle (vehicle) {
    console.log(vehicle);

    this.clickedItem = vehicle['_id'];
    this.selectedVehicle = vehicle;

    //alert(this.clickedItem);

    this.requests = undefined;

    this.adminService.getRequestsOnVehicleForCalender(this.clickedItem)
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

    this.loadRepairHistory(this.clickedItem);
  }

  loadRepairHistory(_id) {
    this.adminService.getRepairHistory(_id)
    .subscribe( records => {
        console.log(records);
      if (records['success']) {
        this.repairHistory = records['msg']['status_info'];
        //this.vehicleNo = records['msg']['vehicle_no'];

        //this.selectRecord(this.recordList[0]);
      }

    });
  }

  // load maintenence history of given vehicle
  loadRepairDialog() {
    let repiarDialogRef = this.dialog.open(RepairHistoryComponent, {
                            'data': {
                              '_id': this.clickedItem
                            },
                            'id': 'repairDialogRef',
                            'width': '80%'
                          });

    repiarDialogRef.afterClosed().subscribe(data => {
      this.loadRepairHistory(this.clickedItem);
    });
  }

  public exportAsExcelFile(): void {
    const readyToExport = this.vehicleList;

    const workBook = XLSX.utils.book_new(); // create a new blank book
    const workSheet = XLSX.utils.json_to_sheet(readyToExport);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'vehicle_list.xlsx'); // initiate a file download in browser
  }

}
