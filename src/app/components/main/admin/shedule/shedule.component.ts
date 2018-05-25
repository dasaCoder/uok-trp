import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from '../../../../services/request.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {
  @Input() reqeustList;
  requests: Request[];
  selectedRequest: Request;

  constructor(private requestService: RequestService) {
        }

  ngOnInit() {
    if (!this.reqeustList) {
      this.get_requests();
    } else {
      this.requests = this.reqeustList;
    }
  }
  get_requests(){
    this.requestService.get_active_req()
      .subscribe(response => {
        this.requests = response['msg'];
        console.log(response['msg']);
      });
  }
  change_status(action: string, refNo: number, status: Number) {
    if (confirm(`Are you sure to ${action} the request?`)) {
      this.requestService.change_status(refNo, status)
        .subscribe(response => {
          this.get_requests();
        });
    }
  }

  isSelect(request) {
    this.selectedRequest = request;
    if (!this.selectedRequest) {
      alert(request['refNo']);
    }
  }

}
