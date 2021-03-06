import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { RequestService } from '../../../../../services/request.service';
import { MatDialog } from '@angular/material';
import { ReqeustPreveiwComponent } from '../reqeust-preveiw/reqeust-preveiw.component';

@Component({
  selector: 'app-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.css']
})
export class RequestsTableComponent implements OnInit {

  @Input() requestDataSource;
  @Output() changeEmitter = new EventEmitter();

  displayedColumns: string[] = ['refNo', 'to', 'from', 'driver', 'vehicle'];

  constructor(private requestService: RequestService, private dialog: MatDialog) { }

  ngOnInit() {
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
              this.changeEmitter.emit(1); // when any change occur to request by dialog activity
            }
          });

    });


  }

}
