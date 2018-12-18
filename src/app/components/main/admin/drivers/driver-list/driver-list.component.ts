import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';

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

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.adminService.getAllDriversDetails()
    .subscribe( drivers => {

        this.drivers = drivers['msg'];
        //console.log(this.drivers);
    } );
  }

  selectDriver (driver) {
    //alert(driver['name']);
    this.clickedItem = driver['_id'];

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
