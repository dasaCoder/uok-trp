import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { AdminService } from '../../../../services/admin.service';
import { ReqeustPreveiwComponent } from './reqeust-preveiw/reqeust-preveiw.component';
import { RequestService } from '../../../../services/request.service';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { RepairHistoryComponent } from './repair-history/repair-history.component';

import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

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
  todayReqData: RequestElement[] = [];

  displayedColumns: string[] = ['refNo', 'to', 'from'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  acceptedReqDataSource = new MatTableDataSource<RequestElement>(this.requestData);
  newReqDataSource = new MatTableDataSource<RequestElement>(this.newRequestData);
  confirmedReqDataSource = new MatTableDataSource<RequestElement>(this.confirmedReqData);
  authenticatedReqDataSource = new MatTableDataSource<RequestElement>(this.authenticatedReqData);

  completedReqDataSource = new MatTableDataSource<RequestElement>(this.completedReqData);
  rejectedReqDataSource = new MatTableDataSource<RequestElement>(this.rejectedReqData);

  todayReqDataSource = new MatTableDataSource<RequestElement>(this.todayReqData);

  requests: any = [];

  //hold requests of today
  todayRequests: any = [];

  onRepairList: any = []; // list of vehicles on repair
  events: any = [];
  options: any = [];

  // add maintenece autocomplete
  myControl = new FormControl();
  vehicles = [];
  startDate;
  endDate;
  startTime = '00:00';
  endTime = '00:00';
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
    private router: Router,
    private _focusMonitor: FocusMonitor
    ) {

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      //this.getNewReqeusts();
  }

  ngAfterViewInit() {

    this._focusMonitor.stopMonitoring(document.getElementById('btn1'));
}

  ngOnInit() {

    //check the auth token validity
    if (!this.authService.isLoggedIn()) {

      this.router.navigateByUrl('/login');
      return;
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

    this.loadMainteneceDetails();

    //load today
    this.loadTodayRequest();

   }

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  //change tab
  changeTab(tab) {
    this.selectedTab = tab;
  }

  loadTableData() {

    this.adminService.getRequestsOnStatusForTable(`status[0]=0`)
    .then(data => {
      this.newRequestData = data;

      this.newReqDataSource.data = this.newRequestData;

    });

    this.adminService.getRequestsOnStatusForTable(`status[0]=1`)
    .then(data => {
      this.acceptedReqData = data;


      this.acceptedReqDataSource.data = this.acceptedReqData;

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

      this.adminService.getRequestsOnStatusForTable(`status[0]=4`)
      .then(data => {
        this.completedReqData = data;

        this.completedReqDataSource.data = this.completedReqData;

      });

      this.adminService.getRequestsOnStatusForTable(`status[0]=5`)
      .then(data => {
        this.rejectedReqData = data;

        this.rejectedReqDataSource.data = this.rejectedReqData;

      });
  }

  // load today's requests
  loadTodayRequest() {
    let today = new Date("2019-01-24");
    console.log(today.toLocaleString());

    this.adminService.getRequestsOnDayForTable("2019-01-24")
      .then(data => {
          this.todayReqData = data;

          this.todayReqDataSource.data = this.todayReqData;

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

  // load maintenence details
  loadMainteneceDetails() {
    this.adminService.getVehicleListOnStatus(102)
        .subscribe(records=> {

          if (records['success']) {

           this.onRepairList = records['msg'];

          }
        });
  }

  // add new maintenence details
  addMainteneceDetails() {

    let details = [];

    details['arrival'] = {};
    let arrival_temp = new Date(this.endDate);
    details['arrival']['dropDate'] = `${arrival_temp.getFullYear()}-${arrival_temp.getMonth() + 1}-${arrival_temp.getDate()}`;
    details['arrival']['dropTime'] = this.endTime;

    details['departure'] = {};
    let departure_temp = new Date(this.startDate);
    details['departure']['pickupDate'] = `${departure_temp.getFullYear()}-${departure_temp.getMonth() + 1}-${departure_temp.getDate()}`;
    details['departure']['pickupTime'] = this.startTime;

    details['isFinished'] = false;
    details['reason'] = this.mReason;
    details['vehicle'] = this.mSelectedVehicle['_id'];
    details['status'] = '102'; // change vehicle status
    details['isFinished'] = false;

   this.adminService.addMainteneceDetails(this.mSelectedVehicle['_id'], details)
        .subscribe( response => {

          console.log(response);
          if (response['success']){
            this.loadMainteneceDetails();

            this.isAddRepairModeOn = false;
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

  // load maintenence history of given vehicle
  loadRepairHistory(_id) {
    let repiarDialogRef = this.dialog.open(RepairHistoryComponent, {
                            'data': {
                              '_id': _id
                            },
                            'id': 'repairDialogRef',
                            'width': '80%'
                          });

    repiarDialogRef.afterClosed().subscribe(data=> {
      this.loadMainteneceDetails();
    })
  }

  // open reqeust dialog
  loadRequest(refNo) {
    //alert(refNo);
    this.requestService.getOneRequest(refNo)
        .subscribe(request => {

          const dialogRef = this.dialog.open(ReqeustPreveiwComponent, {
              width: '90%',
              data: request['msg'][0]
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if(result ===1) {
              this.loadTodayRequest();
              //this.changeEmitter.emit(1); // when any change occur to request by dialog activity
            }
          });

    });


  }

  // logout from the system
  logout() {
    if(confirm('Are you sure to logged out from the system?')){

      this.authService.logout();
      location.href = '/login';
    }
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

