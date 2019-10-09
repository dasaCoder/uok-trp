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
  url = '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {

  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target['result'];
      }
    }
  }

  addDriver(driver) {
    this.isSubmited = true;
console.log("driver ob",driver);
    // calling addDriver method in admin service
    if (driver.name !== '' || driver.nic_no !== '' || driver.driving_liecence_no !== '' || driver.telephone !== '' || driver.address !== '' || driver.password !== '') {
      //alert('ok');

      this.adminService.addDriver(driver)
        .subscribe(response => {
          console.log(response);

          if(response['success']){
            alert('driver added succesfully');
            this.isSubmited = false;

            //location.reload();
          }
        });
    }
    //console.log(driver);
  }
}
