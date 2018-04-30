import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import {ActivatedRoute } from '@angular/router';
import {Request} from '../../../../../classes/request';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public driver = {}; // driver details
  public _id: String; // holds the value of driver object id
  public reqListOnDriver: Request[] = [];
  constructor(private route: ActivatedRoute, private adminService: AdminService) {

    /*
    this will get the driver _id from url parameter
    */
    route.paramMap.subscribe( params => {
      this._id = params.get('driver_id');
    })
   }

  ngOnInit() {
    this.adminService.getDriver(this._id)
      .subscribe( data => {
        this.driver = data['data'][0];
        // console.log(data);
      });

    this.adminService.getRequestOfDriverOnDay(this._id)
      .subscribe( date => {
        //this
      })
  }

}
