import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../../../services/request.service';

@Component({
  selector: 'app-status-msg',
  templateUrl: './status-msg.component.html',
  styleUrls: ['./status-msg.component.css']
})
export class StatusMsgComponent implements OnInit {
  status = 10;
  refNo: number;
  password: string;
  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  getStatus() {
    this.requestService.get_status(this.refNo, this.password)
      .subscribe(response => {
        status = response['msg'][0]['status'];
      });
  }

}
