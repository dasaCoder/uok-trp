import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../services/request.service';
import {ActivatedRoute} from '@angular/router';
import { Request} from '../../../../classes/request';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
  request: any = {};
  requests: Request[];

  constructor(private requestService: RequestService, private route: ActivatedRoute) {
    this.route.paramMap
      .subscribe(params => {
        this.request = this.requestService.getOneRequest(+params.get('refNo'));
      });
  }
  ngOnInit() {
    this.requests = this.requestService.getALLRequests();
  }
  addRequest() {
    console.log(this.request);
    this.requestService.addRequest(this.request);
    // this.requests.push(this.request);
  }

}
