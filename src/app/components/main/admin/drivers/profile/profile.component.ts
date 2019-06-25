import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import {ActivatedRoute, Router } from '@angular/router';
import {Request} from '../../../../../classes/request';
import {Driver} from '../../../../../classes/driver';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import {Vehicle} from '../../../../../classes/vehicle';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() driver;
  @Input() isLoggedIn?: boolean; // this will true when drive logged in

  //public driver: Driver; // driver details
  public reqListOnDriver: Request[] = [];
  public requests: any[];
  public options;
  public selectedReq: Request = new Request();

  todayReqData: RequestElement[] = [];
  monthReqData: RequestElement[] = [];

  todayReqDataSource = new MatTableDataSource<RequestElement>(this.todayReqData);
  monthReqDataSource = new MatTableDataSource<RequestElement>(this.monthReqData);

  constructor(private route: ActivatedRoute, private adminService: AdminService; private router: Router) {

   }

  ngOnInit() {

    this.adminService.getRequestsOnDriverForCalender(this.driver._id)
    .then( events => {

      this.requests = events;
    } );

    this.options = {
      weekends: true,
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      }
    };

    this.adminService.getRequestOfDriverOnDay(this.driver._id)
      .subscribe( data => {
        // console.log(data);
        this.reqListOnDriver = data['data'];
        // console.log(this.reqListOnDriver);
      });

      let today = new Date("2019-01-24");
      console.log(today.toLocaleString());

      this.adminService.getRequestOfDriverOnDayForTable(this.driver._id)
        .then(data => {
            this.todayReqData = data;

            this.todayReqDataSource.data = this.todayReqData;

        });

      // load months req data for table
      this.adminService.getRequestOfDriverOnMonthForTable(this.driver._id)
        .then(data => {
          this.monthReqData = data;
          this.monthReqDataSource.data = this.monthReqData;
        })
  }

  logoutDriver() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('_id');

    this.router.navigate(['/']);

  }



}

export interface RequestElement {
  refNo: string;
  startDate: string;
  endDate: string;
  to: string;
  from: string;
  driver: string;
  vehicle: string;
}
