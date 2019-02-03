import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../services/request.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Request} from '../../../../classes/request';
import {AuthService} from '../../../../services/auth.service';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

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
  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';


  constructor(private requestService: RequestService, private route: ActivatedRoute,private router:Router, private authService: AuthService) {
    this.route.paramMap
      .subscribe(params => {
         console.log(+params.get('refNo'));
        requestService.getOneRequest(+params.get('refNo'))
          .subscribe(response => {
            if (+params.get('refNo') === this.authService.get_refNo()) {
              this.request = response['msg'][0];
              console.log(this.request);
            }
            this.isPermited = this.authService.isLoggedInWithRefno(+params.get('refNo'));
            // console.log(this.request['status']);
          });
      });

  }
  ngOnInit() {
   // this.requests = this.requestService.getALLRequests();
    console.log(this.request);
    this.requestService.addRequest(this.request);
    // this.requests.push(this.request);
  }
 /*
  update more details about request
  */
  updateRequest() {
    this.moreDetails.refNo = this.request.refNo;
    this.moreDetails.status = '2';
    // console.log('updateRequest');
     // console.log(this.moreDetails);
    this.requestService.add_more_details(this.moreDetails)
      .subscribe(response => {
        if (response['success'] && response['msg']['nModified'] === 1) {
          alert('Your details updated successfully');
          alert('please, print the application form and send it to Transport devision');
          this.request.position = this.moreDetails.position;
          this.request.fundingWay = this.moreDetails.fundingWay;
          this.request.purpose = this.moreDetails.purpose;
          this.request.status = this.moreDetails.status;

        } else {
          alert('error occured');
        }
        // console.log('rsponst is');
        // console.log(response);
      });
  }

  logout() {
    this.authService.logout();

    this.router.navigate(['/']);
  }


}
