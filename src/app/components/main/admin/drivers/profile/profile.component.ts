import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import {ActivatedRoute } from '@angular/router';
import {Request} from '../../../../../classes/request';
import {Driver} from '../../../../../classes/driver';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import {Vehicle} from '../../../../../classes/vehicle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() driver;

  //public driver: Driver; // driver details
  public reqListOnDriver: Request[] = [];
  public selectedReq: Request = new Request();

  constructor(private route: ActivatedRoute, private adminService: AdminService) {

   }

  ngOnInit() {
    // this.adminService.getDriver(this.driver._id)
    //   .subscribe( data => {
    //     this.driver = data['data'][0];
    //     // console.log(data);
    //   });

    console.log("profile",this.driver);
    this.adminService.getRequestOfDriverOnDay(this.driver._id)
      .subscribe( data => {
        // console.log(data);
        this.reqListOnDriver = data['data'];
        // console.log(this.reqListOnDriver);
      });
  }

  onClickDay() {
    this.adminService.getRequestOfDriverOnDay(this.driver._id)
      .subscribe( data => {
        this.reqListOnDriver = data['data'];
      });
  }

  onClickMonth() {
    this.adminService.getRequestOfDriverOnMonth(this.driver._id)
      .subscribe(data => {
        this.reqListOnDriver = data['data'];
      });
  }

  selectRequest(request: Request) {
    this.selectedReq = request;
    //console.log(this.selectedReq);
  }

  printPdf() {
    let content = `
    <div #pdf style="width: 210mm;height: 148mm;font-size:12px; padding: 7px; border:1px solid black;">

    <h5 style="text-align: center;"><strong>කැළණිය විශ්ව විද්&zwj;යාලය</strong></h5>

    <p style="text-align: center;"><strong>වාහන ධාවන අවසර පත්&zwj;රය</strong></p>
    <p>ආරක්ෂක නිළධාරීතුමණි,</p>
    <table style="height: 20px; border-color: null;" border="0" width="685">
      <tbody>
      <tr>
        <td style="width: 335.2px;" >වාහන අංකය: ${this.selectedReq['vehicle']['vehicle_no']}</td>
        <td style="width: 335.2px;">රියදුරුගේ නම : ${this.driver.name}</td>
      </tr>
      <tr>
        <td style="width: 335.2px;">අංශය/පීඨය&nbsp; : ${this.selectedReq['dep_unit']}</td>
        <td style="width: 335.2px;">&nbsp;</td>
      </tr>
      </tbody>
    </table>
    <p style="text-align: center;"><strong>ඉහත සදහන් වාහනය රාජකාරී කටයුතු සදහා යොදවා ඇති බැවින් වාහනය පිටවීමට අවසර ලබා දෙන්න.</strong></p>
    <ul>
      <li>වාහනය යන ස්ථානය : ${this.selectedReq.departure.dropPoint}</li>
      <li>රාජකාරී විස්තරය&nbsp; &nbsp; &nbsp; : ${this.selectedReq.purpose}li>
    </ul>
    <table>
      <tbody>
      <tr>
        <td width="350">පිටත්වන දිනය&nbsp; &nbsp; &nbsp;: ${this.selectedReq.departure.pickupDate}</td>
        <td width="350">ආපසු පැමිණෙන දිනය: ${this.selectedReq.arrival.dropDate}</td>
      </tr>
      <tr>
        <td width="350">වේලාව : ${this.selectedReq.departure.pickupTime}</td>
        <td width="350">වේලාව &nbsp; &nbsp; &nbsp; : ${this.selectedReq.arrival.dropTime}</td>
      </tr>
      <tr>
        <td width="350">මයිලෝ මීටරය&nbsp; &nbsp; &nbsp;:</td>
        <td width="350">මයිලෝ මීටරය&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:</td>
      </tr>
      </tbody>
    </table>
    <p>&nbsp;</p>
    <hr />
    <table style="height: 73px; width: 693px;">
      <tbody>
      <tr style="height: 25px;">
        <td style="width: 202px; height: 25px;">දිනය</td>
        <td style="width: 178px; height: 25px;">&nbsp;</td>
        <td style="width: 301px; height: 25px;">සටහන් තබා ගන්නා ආරක්ෂක නිලධාරීයාගේ,</td>
      </tr>
      <tr style="height: 5px;">
        <td style="width: 202px; height: 5px;">
          <p>&nbsp;</p>
          <p>______________________</p>
        </td>
        <td style="width: 210px; height: 5px;">&nbsp;
            <table style="height: 42px; width: 178.2px;">
            <tbody>
            <tr>
            <td style="width: 151px;">&nbsp;නුවර පාර පිවිසුම</td>
            <td style="width: 16.2px; border: 1px solid">&nbsp;</td>
            </tr>
            <tr>
            <td style="width: 151px;">වැඩ අංශයේ&nbsp;පිවිසුම</td>
            <td style="width: 16.2px; border: 1px solid">&nbsp;</td>
            </tr>
            </tbody>
            </table>
            </td>
        <td style="width: 301px; height: 5px;">
          <table style="height: 69px; width: 244px;">
            <tbody>
            <tr style="height: 14.8px;">
              <td style="width: 73px; height: 14.8px;">නම&nbsp; &nbsp; &nbsp; &nbsp;:</td>
              <td style="width: 158px; height: 14.8px;">&nbsp;_________________</td>
            </tr>
            <tr style="height: 26px;">
              <td style="width: 73px; height: 26px;">අත්සන&nbsp; :</td>
              <td style="width: 158px; height: 26px;">&nbsp;_________________</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="height: 17px;">
        <td style="width: 202px; height: 17px;">රියදුරු මහතාගේ අත්සන</td>
        <td style="width: 178px; height: 17px;">&nbsp;</td>
        <td style="width: 301px; height: 17px;">&nbsp; &nbsp;</td>
      </tr>
      </tbody>
    </table>

  </div>
    `;

    document.getElementById('vehicle_pass_div').innerHTML = content;

    html2canvas(document.getElementById('vehicle_pass_div')).then( canvas => {

      document.getElementById('vehicle_pass_div').innerHTML = '';

      let imgData = canvas.toDataURL('image/png');
      // document.body.appendChild(canvas);

      let doc = new jsPDF('l', 'pt' , 'a5');
      let width = doc.internal.pageSize.width;
      let height = doc.internal.pageSize.height;
      doc.addImage(imgData, 'JPEG', 0 , 0, width, height);
      doc.save('img.pdf');
    })
  }

}
