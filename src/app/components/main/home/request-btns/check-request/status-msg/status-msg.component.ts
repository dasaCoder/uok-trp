import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../../../services/request.service';

@Component({
  selector: 'app-status-msg',
  templateUrl: './status-msg.component.html',
  styleUrls: ['./status-msg.component.css']
})
export class StatusMsgComponent implements OnInit {
  status;
  refNo: number;
  password: string;
  constructor(private requestService: RequestService) {
    this.status = 10;
  }

  ngOnInit() {
    this.status = 10;
  }

  getStatus() {
    this.requestService.get_status(this.refNo, this.password)
      .subscribe(response => {
        if (response['msg'][0]) {
          this.status = response['msg'][0]['status'];
        } else {
          this.status = 5;
        }
      });
  }
}
