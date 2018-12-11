import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { AdminService } from '../../../../../services/admin.service';
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  refNo;
  requests: any[];
  options: any = [];
  drivers: any[] = [];
  clickedItem;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) {



   }

  ngOnInit() {
    this.refNo = this.data['refNo'];

    //console.log("data",this.data);

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

  setDriver(driver) {

    this.adminService.setDriver(this.refNo, driver['_id'])
      .subscribe( response => {
        console.log(response);
        if ( response['success'] === true) {
          //this.setDriver_.emit(this.selectedDriver);
          location.reload();
        }
      });
  }

}
