import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../../services/admin.service';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  public requestList: Request[];
  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getRequestListOnDay('2018-4-19')
      .subscribe(resp => {
        if (resp['success']) {
          this.requestList = resp['data'];
        }
        console.log(this.requestList);
      });
  }

}
