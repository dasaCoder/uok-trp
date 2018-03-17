import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../services/admin.service';

@Component({
  selector: 'app-request-admin-view',
  templateUrl: './request-admin-view.component.html',
  styleUrls: ['./request-admin-view.component.css']
})
export class RequestAdminViewComponent implements OnInit {
  public source: string[] = [];
  public data: Array<string>;
  test = 'kkkk';
  constructor(private adminService: AdminService) {
    adminService.getDrivers()
      .subscribe( response => {
        for (let x = 0; x < response['msg'].length; x++){
          this.source[x] = (response['msg'][x]['name']);
        }
       // this.source = response['msg'];
        console.log(this.source);
        this.data = this.source.slice();
      });

  }

  ngOnInit() {
  }
  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  addDriver(){
    alert('dilsuha');
  }

}
