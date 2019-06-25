import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})
export class DriverProfileComponent implements OnInit {

  public driver;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    let _id = this.activatedRoute.snapshot.queryParams['_id'];
    console.log("_di",_id);
    this.adminService.getDriver(_id)
        .subscribe(driver=> {
          this.driver = driver['data'][0];
          console.log("driver", driver);
        })
  }

}
