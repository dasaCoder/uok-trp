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

  printPdf() {
    let content = `<div class="page">
    <center class="wrapper">
      <table class="top-panel center" width="602" border="0" cellspacing="0" cellpadding="0">
          <tbody>
          <tr>
            <br>
              <td><img src="https://i.ibb.co/0hjnWbB/220px-Kelaniya.png" alt="220px-Kelaniya" style="height:100px;float:right" border="0"></td>
              <td class="title" width="300"><div class="title">ප්රවාහන අංශය</div>
                <div class="title" style="    font-size: 15px;
    padding-top: 0px;
   ">
                  කැළණිය විශ්ව විද්‍යාලය - කැළණිය
                </div>
            </td>

          </tr>



          </tbody>
      </table>
<br>
      <h3>ධාවන වාරයක් සදහා රථයක් ලබා ගැනීමට අවසර ලබා ගැනීම</h3>
      <div class="spacer">&nbsp;</div>

      <table class="main center" width="602" border="0" cellspacing="0" cellpadding="0">
          <tbody>

          <tr>
              <td class="column">
                  <div class="column-top">&nbsp;</div>
                  <table class="content" border="0" cellspacing="0" cellpadding="0">
                      <tbody>
                      <tr>
<!--                           <td class="padded">
                            <h1 style="margin-bottom:-5px">Transport Division</h1>
                            <span style="padding-left:5px;font-size:0.8em;">University of Kelaniya</span>
                            <hr>
                            <br>
                            <p>Hi! Diusha,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your request is Accepted which means we are able to supply your vehicle on time. Please supply us few additional details to proceed. </p> <i> Please use following credentials for check the status of your request.</i> <br><br>
                            <div style="padding-left:50px">
                              <ul class="mail-ul">
                              <li>Refferance No : TRD/230</li>
                              <li>password : 1234</li>
                            </ul>
                            </div>

                            <p class="caption">This is a caption text in main email body.</p>
                          </td> -->
                      </tr>
                                                                                                   <tr>
                                <td class="padded">
                                  අංකය
                                </td>
                                <td class="padded">
                                  TRD/${this.request.refNo}
                                </td>
                              </tr>
                              <tr>
                                <td class="padded">
                                  ඉල්ලුම්කරුගේ නම
                                </td>
                                <td class="padded">
                                ${this.request.lecturer}
                                </td>
                              </tr>
                                                      <tr>
                                <td class="padded">
                                  ඉල්ලුම්කරුගේ තනතුර
                                </td>
                                <td class="padded">
                                ${this.request.position}
                                </td>
                              </tr>
                                                      <tr>
                                <td class="padded">
                                  පීඨය
                                </td>
                                <td class="padded">
                                ${this.request.dep_unit}
                                </td>
                              </tr>

                      </tbody>
                  </table>
                <hr>
                <h4 class="padded">චාරිකාව පිළිබද</h4> <br>
                <table  class="content" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                          <td class="padded">
                            ආරම්භක ස්ථානය
                          </td>

                          <td class="padded">
                          ${this.request.departure.pickPointAddress}
                          </td>
                        </tr>

                        <tr>
                          <td class="padded">
                            ගමනාන්තය
                          </td>

                          <td class="padded">
                          ${this.request.departure.dropPointAddress}
                          </td>
                        </tr>
                        <tr>
                          <td class="padded">
                            පිටත්වන දිනය
                          </td>

                          <td class="padded" style="width:5cm">
                          ${this.request.departure.pickupDate}
                          </td>

                          <td class="padded">වේලාව</td>
                          <td class="padded">${this.request.departure.pickupTime}</td>


                        </tr>

                        <tr>
                          <td class="padded" style="width:5cm">ආපසු පැමිණෙන දිනය</td>
                          <td class="padded">${this.request.arrival.dropDate}</td>
                          <td class="padded">වේලාව</td>
                          <td class="padded">${this.request.arrival.dropTime}</td>


                        </tr>

                        <tr>
                          <td class="padded">හේතුව</td>
                          <td class="padded">${this.request.purpose}</td>
                        </tr>
                </table>
                <hr>
                <table class="content" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <br><br><br>
                    <td class="padded">
                      ............................................................
                    </td>
                     <td class="padded">
                      ............................................................
                    </td>
                     <td class="padded">
                      ............................................................
                    </td>
                  </tr>
                  <tr>
                    <td class="padded-sign">
                      ඉල්ලුම්කරුගේ අත්සන
                    </td>
                     <td class="padded-sign">
                      Dean
                    </td>
                     <td class="padded-sign">
                      දිනය
                    </td>
                  </tr>

                </table>
                <br>
                  <div class="column-bottom">&nbsp;</div>
              </td>
          </tr>
          </tbody>
      </table>

      <div class="spacer">&nbsp;</div>

      <table class="footer center" width="602" border="0" cellspacing="0" cellpadding="0">
          <tbody>
          <tr>
              <td class="border" colspan="2">&nbsp;</td>
          </tr>
          <tr>
              <td class="signature" width="300">
                  <p>

                      Transport Division,<br>
                      University Of Kelaniya <br>
                      +0 (000) 00-00-00, John Doe<br>
                      </p>
                  <p>
                      Support: <a class="strong" href="mailto:#" target="_blank">trp.uok@gmail.com</a>
                  </p>
              </td>

          </tr>
          </tbody>
      </table>
  </center>
</div>`;

    //document.getElementById('request_form_div').innerHTML = content;

    html2canvas(document.getElementById('request_form_div')).then( canvas => {

      //document.getElementById('request_form_div').innerHTML = '';

      let imgData = canvas.toDataURL('image/png');
      // document.body.appendChild(canvas);

      let doc = new jsPDF('p', 'mm' , 'a4');
      //doc.setFont("helvetica");
      var width = 300;
      let height = 297;
      doc.addImage(imgData, 'JPEG', 0 , 0, width, height);
      doc.save('request.pdf');
    })
  }


}
