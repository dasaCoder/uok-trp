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

  constructor(private activatedRoute: ActivatedRoute; private adminService: AdminService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const _id = params['_id'];
      
      this.adminService.getDriver(_id)
          .subscribe( driver => {
            this.driver = driver;
          })

    })
  }

}
