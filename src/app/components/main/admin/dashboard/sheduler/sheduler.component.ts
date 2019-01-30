import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { RequestService } from '../../../../../services/request.service';
import { MatDialog } from '@angular/material';
import { ReqeustPreveiwComponent } from '../reqeust-preveiw/reqeust-preveiw.component';


@Component({
  selector: 'app-sheduler',
  templateUrl: './sheduler.component.html',
  styleUrls: ['./sheduler.component.css']
})
export class ShedulerComponent implements OnInit {

  @Input() requests;

  events: any = [];
  options: any = [];

  constructor(
    private adminService: AdminService,
    private requestService: RequestService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit() {

      this.events = this.requests;

      this.options = {
        weekends: true,
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventClick: (e) => {
          console.log(e['event']['title']);

          let refNo = e['event']['title'];

          if (refNo === undefined || refNo === '' ) {
            return;
          }

          this.loadRequest(refNo.substr(4));
        }
      };

  }

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

            }
          });

    });


  }

}
