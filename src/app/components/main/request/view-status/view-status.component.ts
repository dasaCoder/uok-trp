import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../services/request.service';
import {ActivatedRoute} from '@angular/router';
import { Request} from '../../../../classes/request';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
  request: any = {};
  requests: Request[];
  isPermited = false;
  moreDetails: Request = new Request();


  constructor(private requestService: RequestService, private route: ActivatedRoute, private authService: AuthService) {
    this.route.paramMap
      .subscribe(params => {
        console.log(+params.get('refNo'));
        requestService.getOneRequest(+params.get('refNo'))
          .subscribe(response => {
            this.request = response['msg'][0];
            console.log(this.request['status']['status']);
          });
      });
    this.isPermited = this.authService.isLoggedIn();
  }
  ngOnInit() {
   // this.requests = this.requestService.getALLRequests();
    console.log(this.request);
    this.requestService.addRequest(this.request);
    // this.requests.push(this.request);
  }
  updateRequest() {
    this.moreDetails.refNo = this.request.refNo;
    console.log('updateRequest');
    console.log(this.moreDetails);
    this.requestService.add_more_details(this.moreDetails)
      .subscribe(response => {
        console.log(response);
      });
  }


}
