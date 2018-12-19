import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { AdminService } from '../../../../../services/admin.service';
import { Vehicle } from '../../../../../classes/vehicle';
import { Driver } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-add-vehicle-to-req',
  templateUrl: './add-vehicle-to-req.component.html',
  styleUrls: ['./add-vehicle-to-req.component.css']
})
export class AddVehicleToReqComponent implements OnInit {

  refNo;
  requests: any[];
  options: any = [];
  vehicles: any[] = [];
  clickedItem;
  selectedVehicle;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService,
              public addVehicleRef: MatDialogRef <AddVehicleToReqComponent>) { }

  ngOnInit() {

    this.refNo = this.data['refNo'];

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
  }

  setVehicle (vehicle) {

    this.adminService.set_vehicle(this.refNo, vehicle['_id'])
        .subscribe(response => {
          console.log("add vehicle", response);
          if (response['success']) {
              this.addVehicleRef.close({'status': true, 'vehicle': this.selectedVehicle });
          }
        });

  }


}
