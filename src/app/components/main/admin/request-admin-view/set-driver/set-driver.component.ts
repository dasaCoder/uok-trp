import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdminService} from '../../../../../services/admin.service';
import {Driver} from '../../../../../classes/driver';
import {Request} from '../../../../../classes/request';

@Component({
  selector: 'app-set-driver',
  templateUrl: './set-driver.component.html',
  styleUrls: ['./set-driver.component.css']
})
export class SetDriverComponent implements OnInit {

@Input() refNo;
@Output() setDriver_ = new EventEmitter<Driver>();

public driver_list: Driver[];
public reqListOnDriver: Request[];

public selectedDriver: Driver;
public imageUrl = '/assets/images/pattern/pattern.png';
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllDriversDetails()
      .subscribe(response => {
        this.driver_list = response['msg'];
      });
  }

  onclickDriver(driver) {
    this.selectedDriver = driver;
    this.imageUrl = '/assets/images/pattern/pattern.png';

    this.adminService.getRequestOfDriverOnDay(driver['_id'])
      .subscribe( response => {
        // console.log(response);
        if (response['data'][0] !== null ) {
          this.reqListOnDriver = response['data'];
          console.log(this.reqListOnDriver);
        }
      });
  }
  setDriver() {
    console.log(this.selectedDriver);
    this.adminService.setDriver(this.refNo, this.selectedDriver['_id'])
      .subscribe( response => {
        console.log(response);
        if ( response['success'] === true) {
          this.setDriver_.emit(this.selectedDriver);
        }
      });
  }


}
