import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AdminService } from '../../../../../services/admin.service';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) { }

  ngOnInit() {

    this.refNo = this.data['refNo'];

    this.adminService.getVehicle_to_req()
      .subscribe((response => {

        this.vehicles = response['msg'];
      }));

  }

  selectVehicle (vehicle) {

    this.clickedItem = vehicle['_id'];

    this.requests = undefined;

    this.adminService.getRequestOnStatusForCalender(`status[0]=1&statsu[1]=2&status[2]=3&status[3]=4&status[4]=0`)
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
          console.log("add vehicle",response);
          if (response['success']){
            console.log("add vehicle", response);
            //this.isSetVehicle = true;
            if(vehicle['driver']) {
              this.adminService.setDriver(this.refNo, vehicle['driver']['id'])
                .subscribe( rspns => {
                  console.log("add driver respns" , rspns);
                });
            }
          }
        });

  }


}
