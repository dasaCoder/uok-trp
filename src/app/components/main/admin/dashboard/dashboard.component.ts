import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  requestData: RequestElement[] = [];
  newRequestData: RequestElement[] = []; // store all new reqeusts
  acceptedReqData: RequestElement[] = [];

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns: string[] = ['refNo', 'to', 'from', 'driver','vehicle'];

  acceptedReqDataSource = new MatTableDataSource<RequestElement>(this.requestData);
  newReqDataSource = new MatTableDataSource<RequestElement>(this.newRequestData);

  requests: any = [];

  events: any = [];
  options: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminService: AdminService) {
      //this.getNewReqeusts();
  }

  ngOnInit() {
   // this.acceptedReqDataSource.paginator = this.paginator;
    //this.dataSource.paginator = this.paginator;

    this.adminService.getRequestOnStatusForCalender(`status[0]=1&statsu[1]=2&status[2]=3&status[3]=4&status[4]=0`)
        .then( events => {this.events = events; } );

        this.options = {
          weekends: true,
          header: {
              left: 'prev,next',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          }
        };

    this.adminService.getRequestsOnStatusForTable(`status[0]=1`)
        .then(data => {
          this.acceptedReqData = data;


          this.acceptedReqDataSource.data = this.acceptedReqData;
          console.log("accepted", this.acceptedReqDataSource);

    });

    this.adminService.getRequestsOnStatusForTable(`status[0]=0`)
    .then(data => {
      this.newRequestData = data;

      this.newReqDataSource.data = this.newRequestData;
      console.log("new", this.newRequestData);

    });


   }

  getRequestOnStatus(): any {
    // this.adminService.getRequestsOnStatusForTable(`status[0]=1&statsu[1]=2&status[3]=4&status[4]=0`)
    //     .subscribe(data => {
    //       console.log('status ', data['msg'].length);
    //       this.requests = data['msg'];
    //     } );
  }

  getNewReqeusts() {
    this.adminService.get_request_list(1)
        .subscribe(data => {
          console.log('new', data);
        });


  }

  loadRequest(refNo) {
    alert(refNo);
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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
