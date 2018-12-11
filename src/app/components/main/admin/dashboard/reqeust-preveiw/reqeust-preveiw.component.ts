import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { AddDriverComponent } from '../add-driver/add-driver.component';
import { RequestService } from '../../../../../services/request.service';

@Component({
  selector: 'app-reqeust-preveiw',
  templateUrl: './reqeust-preveiw.component.html',
  styleUrls: ['./reqeust-preveiw.component.css']
})
export class ReqeustPreveiwComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private requestService: RequestService) {
    console.log("req data",data);
   }

  ngOnInit() {
  }

  addDriver() {
    const dialogRef = this.dialog.open(AddDriverComponent, {
        id: "dialogAddDriver",
        data: {
          'requests': []
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  rejectRequest(refNo) {
    this.requestService.change_status(refNo, 3)
      .subscribe( (response) => {
        console.log(response['msg']);
        location.reload();
      });
  }

  acceptRequest(refNo) {
    this.requestService.change_status(refNo, 1)
      .subscribe( (response) => {
        console.log(response['msg']);
        location.reload();
      });

  }


  markDocumentedRequest(refNo) {
    this.requestService.change_status(refNo, 4)
      .subscribe( response => {
        //alert('daon');
        console.log(response['msg']);
        location.reload();
      });
  }

}
