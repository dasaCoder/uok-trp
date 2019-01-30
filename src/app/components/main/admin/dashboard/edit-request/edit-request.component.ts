import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AdminService } from '../../../../../services/admin.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  selectedRequest = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private editDialogRef: MatDialogRef<EditRequestComponent>,
    private adminService: AdminService
    ) {

    this.selectedRequest = data;
  }

  ngOnInit() {
  }

  // edit the reqeust
  editRequest(request) {

    let arrival_temp = new Date(request['arrival']['dropDate']);
    request['arrival']['dropDate'] = `${arrival_temp.getFullYear()}-${arrival_temp.getMonth() + 1}-${arrival_temp.getDate()}`;

    let departure_temp = new Date(request['departure']['pickupDate']);
    request['departure']['pickupDate'] = `${departure_temp.getFullYear()}-${departure_temp.getMonth() + 1}-${departure_temp.getDate()}`;

    console.log(request);

    this.adminService.updateRequest(request)
        .subscribe( response => {
          console.log(response);

          if(response['success']) {
            this.editDialogRef.close(1);
          }

        });
  }

}
