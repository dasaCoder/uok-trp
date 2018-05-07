import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import {ActivatedRoute } from '@angular/router';
import {Request} from '../../../../../classes/request';
import {Driver} from '../../../../../classes/driver';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public driver: Driver; // driver details
  public _id: String; // holds the value of driver object id
  public reqListOnDriver: Request[] = [];
  public selectedReq = {};
  constructor(private route: ActivatedRoute, private adminService: AdminService) {

    /*
    this will get the driver _id from url parameter
    */
    route.paramMap.subscribe( params => {
      this._id = params.get('driver_id');
    });
   }

  ngOnInit() {
    this.adminService.getDriver(this._id)
      .subscribe( data => {
        this.driver = data['data'][0];
        // console.log(data);
      });

    this.adminService.getRequestOfDriverOnDay(this._id)
      .subscribe( data => {
        // console.log(data);
        this.reqListOnDriver = data['data'];
        // console.log(this.reqListOnDriver);
      });
  }

  onClickDay() {
    this.adminService.getRequestOfDriverOnDay(this._id)
      .subscribe( data => {
        this.reqListOnDriver = data['data'];
      });
  }

  onClickMonth() {
    this.adminService.getRequestOfDriverOnMonth(this._id)
      .subscribe(data => {
        this.reqListOnDriver = data['data'];
      });
  }

  selectRequest(request: Request) {
    this.selectedReq = request;
  }

  printPdf(value) {
    console.log(value);


    let options = {
      orientation: 'l',
      unit: 'pt',
      format: 'a6'
    };

    let doc = new jsPDF(options, '' , '', '' );


    doc.fromHTML(
      value,
      15,
      15,
      {
        width: 415
      }
      );
    doc.setFontSize(9);

    // Save the PDF
    doc.save();
  }

}
