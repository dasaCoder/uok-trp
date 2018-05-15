import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../../services/admin.service';
import {Driver} from '../../../../../classes/driver';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isSubmited: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {

  }
  addDriver(driver) {
    this.isSubmited = true;

    // calling addDriver method in admin service
    if (driver.name !== '' || driver.nic_no !== '' || driver.driving_liecence_no !== '' || driver.telephone !== '' || driver.address !== '') {
      alert('ok');
      this.adminService.addDriver(driver)
        .subscribe(response => {
          console.log(response);
        });
    }
    console.log(driver);
  }
}
