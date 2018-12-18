import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { AdminService } from '../../../../services/admin.service';
import { ReqeustPreveiwComponent } from './reqeust-preveiw/reqeust-preveiw.component';
import { RequestService } from '../../../../services/request.service';

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

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns: string[] = ['refNo', 'to', 'from', 'driver','vehicle'];

  acceptedReqDataSource = new MatTableDataSource<RequestElement>(this.requestData);
  newReqDataSource = new MatTableDataSource<RequestElement>(this.newRequestData);

  requests: any = [];

  events: any = [];
  options: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _mobileQueryListener: () => void;

  constructor(private adminService: AdminService, private dialog: MatDialog, private requestService: RequestService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    ) {

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
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

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  //change tab
  changeTab(tab) {
    this.selectedTab = tab;
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
    //alert(refNo);
    this.requestService.getOneRequest(refNo)
        .subscribe(request => {

          const dialogRef = this.dialog.open(ReqeustPreveiwComponent,{
              width: '90%',
              data: request['msg'][0]
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });

    });


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

