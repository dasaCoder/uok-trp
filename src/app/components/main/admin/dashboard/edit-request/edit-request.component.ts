import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  selectedRequest = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private editDialogRef: MatDialogRef<EditRequestComponent>
    ) {

    this.selectedRequest = data;
  }

  ngOnInit() {
  }

  // edit the reqeust
  editRequest(request) {
    this.editDialogRef.close(1);
  }

}
