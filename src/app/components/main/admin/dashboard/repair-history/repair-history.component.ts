import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AdminService } from '../../../../../services/admin.service';

@Component({
  selector: 'app-repair-history',
  templateUrl: './repair-history.component.html',
  styleUrls: ['./repair-history.component.css']
})
export class RepairHistoryComponent implements OnInit {

  disabled = false; // disable or enable inputs
  recordList = [];
  selectedRecord = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService
  ) {
    this.selectedRecord['departure'] = [];
    this.selectedRecord['arrival'] = [];
    this.selectedRecord['arrival']['dropDate'] = "12/10/2019";
      this.loadRepairHistory();
    }

  ngOnInit() {


  }

  loadRepairHistory() {
    this.adminService.getRepairHistory(this.data._id)
    .subscribe( records => {

      if (records['success']) {
        this.recordList = records['msg']['status_info'];

        this.selectRecord(this.recordList[0]);
      }

    });
  }

  // select given status
  selectRecord(record) {
    this.selectedRecord = record;
    this.selectedRecord['arrival']['dropDate'] = new Date(this.selectedRecord['arrival']['dropDate']);
    this.selectedRecord['departure']['pickupDate'] = new Date(this.selectedRecord['departure']['pickupDate']);
  }

}
