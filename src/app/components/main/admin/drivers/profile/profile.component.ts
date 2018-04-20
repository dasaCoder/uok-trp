import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public driver = [];
  public _id: String;
  constructor(private route: ActivatedRoute, private adminService: AdminService) {
    route.paramMap.subscribe( params => {
      this._id = params.get('driver_id');
    })
   }

  ngOnInit() {
    this.adminService.getDriver(this._id)
      .subscribe( data => {
        this.driver = data['data'][0];
        // console.log(data);
      })
  }

}
