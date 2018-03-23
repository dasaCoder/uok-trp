import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../services/request.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {
  requests: Request[];
  constructor(private requestService: RequestService) {
    this.get_requests();
  }

  ngOnInit() {
  }
  get_requests(){
    this.requestService.get_active_req()
      .subscribe(response => {
        this.requests = response['msg'];
      });
  }
  change_status(refNo: number, status: Number) {
    this.requestService.change_status(refNo, status)
      .subscribe(response => {
        this.get_requests();
      });
  }

}
