import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { AdminService } from '../../../../services/admin.service';
import { ReqeustPreveiwComponent } from './reqeust-preveiw/reqeust-preveiw.component';
import { RequestService } from '../../../../services/request.service';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  selectedTab = 1; // 1-> sheduer 2-> requests
  //side nav
  mobileQuery: MediaQueryList;

  requestData: RequestElement[] = [];
  newRequestData: RequestElement[] = []; // store all new reqeusts
  acceptedReqData: RequestElement[] = [];
  confirmedReqData: RequestElement[] = [];
  authenticatedReqData: RequestElement[] = [];
  completedReqData: RequestElement[] = [];
  rejectedReqData: RequestElement[] = [];

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  acceptedReqDataSource = new MatTableDataSource<RequestElement>(this.requestData);
  newReqDataSource = new MatTableDataSource<RequestElement>(this.newRequestData);
  confirmedReqDataSource = new MatTableDataSource<RequestElement>(this.confirmedReqData);
  authenticatedReqDataSource = new MatTableDataSource<RequestElement>(this.authenticatedReqData);

  completedReqDataSource = new MatTableDataSource<RequestElement>(this.completedReqData);
  rejectedReqDataSource = new MatTableDataSource<RequestElement>(this.rejectedReqData);

  requests: any = [];

  events: any = [];
  options: any = [];

  // add maintenece autocomplete
  myControl = new FormControl();
  vehicles = [];
  startDate;
  endDate;
  startTime;
  endTime;
  mReason;
  mSelectedVehicle;

  // toggle between add repair mode and not
  isAddRepairModeOn = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _mobileQueryListener: () => void;

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private dialog: MatDialog,
    private requestService: RequestService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
    ) {

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      //this.getNewReqeusts();
  }

  ngOnInit() {

    //check the auth token validity
    if (!this.authService.isLoggedIn()) {

      this.router.navigateByUrl('/login');
    }
   // this.acceptedReqDataSource.paginator = this.paginator;
    //this.dataSource.paginator = this.paginator;

    this.adminService.getRequestOnStatusForCalender(`status[0]=1&statsu[1]=2&status[2]=3&status[3]=4&status[4]=0&status[5]=100`)
        .then( events => {this.events = events; } );

        this.options = {
          weekends: true,
          header: {
              left: 'prev,next',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          }
        };

        this.loadTableData();

    // load vehicle list
    this.adminService.getVehicle_to_req()
    .subscribe((response => {
      console.log(response['data']);
      this.vehicles = response['data'];
    }));

   }

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  //change tab
  changeTab(tab) {
    this.selectedTab = tab;
  }

  loadTableData() {
      this.adminService.getRequestsOnStatusForTable(`status[0]=1`)
      .then(data => {
        this.acceptedReqData = data;


        this.acceptedReqDataSource.data = this.acceptedReqData;

      });

      this.adminService.getRequestsOnStatusForTable(`status[0]=0`)
      .then(data => {
        this.newRequestData = data;

        this.newReqDataSource.data = this.newRequestData;

      });

      this.adminService.getRequestsOnStatusForTable(`status[0]=2`)
      .then(data => {
        this.confirmedReqData = data;

        this.confirmedReqDataSource.data = this.confirmedReqData;

      });

      this.adminService.getRequestsOnStatusForTable(`status[0]=3`)
      .then(data => {
        this.authenticatedReqData = data;

        this.authenticatedReqDataSource.data = this.authenticatedReqData;

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

  // add new maintenence details
  addMainteneceDetails() {

    let details = [];

    details['arrival'] = [];
    details['arrival']['dropDate'] = this.endDate;
    details['arrival']['dropTime'] = this.endTime;

    details['departure'] = [];
    details['departure']['pickupDate'] = this.startDate;
    details['departure']['pickupTime'] = this.startTime;

    details['status'] = '102';
    details['reason'] = this.mReason;
    details['vehicle'] = this.mSelectedVehicle;

    console.log("details",details);
    //
    this.adminService.addMainteneceDetails(this.mSelectedVehicle['_id'], details)
        .subscribe( response => {
          console.log(response);
          if (response['success']){

          }
        });
  }

  // invoke when dialog activity change data of a request
  changeDetecter(change) {
    if(change === 1) {
      this.loadTableData();
    }
  }

  // filter vehicle no for autocomplete after select an option
  displayVehicleNo(vehicle) {
      return vehicle ? vehicle['vehicle_no'] : vehicle;
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

