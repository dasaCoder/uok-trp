import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { RepairHistoryComponent } from '../../dashboard/repair-history/repair-history.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  refNo;
  requests: any[];
  options: any = [];
  vehicles: any[] = [];
  clickedItem;
  selectedVehicle;

  // repair history
  repairHistory: any[] = [];
  selectedHistoryRecord;

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {

    this.adminService.getVehicle_to_req()
      .subscribe((response => {
        console.log(response['data']);
        this.vehicles = response['data'];
      }));

  }

  selectVehicle (vehicle) {
    //console.log(vehicle);

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

}
