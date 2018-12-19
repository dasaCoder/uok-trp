import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';

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

  constructor(private adminService: AdminService) { }

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
  }

}
