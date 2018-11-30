import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../services/request.service';
import {ActivatedRoute} from '@angular/router';
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


  constructor(private requestService: RequestService, private route: ActivatedRoute, private authService: AuthService) {
    this.route.paramMap
      .subscribe(params => {
         console.log(+params.get('refNo'));
        requestService.getOneRequest(+params.get('refNo'))
          .subscribe(response => {
            if (+params.get('refNo') === this.authService.get_refNo()) {
              this.request = response['msg'][0];
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

  printPdf() {
    let content = `
    			 		

          <div style="width:210mm; height:297mm">
            <div class="container">
            
            <div class="container-fluid">
            <div class="text-center"> <br><br>
            
                  <img src="../../assets/images/logo/logo.png" class="nav-logo" alt="" style="height: 150px">
                  <h3>කැළණිය විශ්ව විද්‍යාලය - කැළණිය</h3>
                  
                   
                   <p > ධාවන වාරයක් සදහා රථයක් ලබා ගැනීමට අවසර ලබා ගැනීම</p>
                   <br>
                   <br>
              </div>
                
                <div class="">
                
                <ngx-qrcode qrc-element-type="url" [qrc-value]="ngxQrcode2" ></ngx-qrcode>
                
                 <div class="row">
                
                    <div class="col-12">අංකය	:&nbsp;	TRD/${this.request.refNo}</div>
                    <div class="col-12">පීඨය	:	&nbsp;${this.request.dep_unit}</div>
                    <div class="col-12">ඉල්ලුම්කරුගේ නම  :  ${this.request.name}</div>
                    <div class="col-12">ඉල්ලුම්කරුගේ තනතුර	:&nbsp;	${this.request.position}</div>
                    
                    <br><br>
                    <div class="col-12" style="border-bottom: 1px solid #000000;">චාරිකාව පිළිබද</div>
                    
                    <div class="col-12" style="padding-top: 10px">ආරම්භක ස්ථානය	:&nbsp;	${this.request.departure.pickPointAddress}</div>
                    <div class="col-12">ගමනාන්තය		:&nbsp;	${this.request.departure.dropPointAddress}</div>
                
                <br><br>
                      <div class="col-8">පිටත්වන දිනය :&nbsp; ${this.request.departure.pickupDate}</div>
                      <div class="col-4">වේලාව &nbsp; &nbsp; &nbsp; : &nbsp;${this.request.departure.pickupTime}</div>
                    
                      <div class="col-8">ආපසු පැමිණෙන දිනය:&nbsp; ${this.request.arrival.dropDate}</div>
                      
                      <div class="col-4">වේලාව &nbsp; &nbsp; &nbsp; :&nbsp; ${this.request.arrival.dropTime}</div>
           
                     <br><br>
                   
                    <div class="col-6">හේතුව	&nbsp; &nbsp; &nbsp;		:&nbsp;	${this.request.purpose}</div>
                  
                    <br><br><br>
                    
                    
                  </div>         
                  
                  </div>
                <div class="row">
                        <div class="col-lg-6">
                          <p>........................................</p>
                          <p>ඉල්ලුම්කරුගේ අත්සන</p>
                        </div>
                        
                         <div class="col-lg-6">
                          <p>........................................</p>
                          <p>දිනය</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
              
                
               
            </div>
          
            
          
          
          
          </div>
    `;

    document.getElementById('request_form_div').innerHTML = content;

    html2canvas(document.getElementById('request_form_div')).then( canvas => {

      document.getElementById('request_form_div').innerHTML = '';

      let imgData = canvas.toDataURL('image/png');
      // document.body.appendChild(canvas);

      let doc = new jsPDF('p', 'mm' , 'a4');
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(10);
      var width = 470;
      let height = doc.internal.pageSize.height;
      doc.addImage(imgData, 'JPEG', 0 , 0, width, height);
      doc.save('request.pdf');
    })
  }


}
