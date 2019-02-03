import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { AddDriverComponent } from '../add-driver/add-driver.component';
import { RequestService } from '../../../../../services/request.service';
import { AddVehicleToReqComponent } from '../add-vehicle-to-req/add-vehicle-to-req.component';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { EditRequestComponent } from '../edit-request/edit-request.component';
//import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-reqeust-preveiw',
  templateUrl: './reqeust-preveiw.component.html',
  styleUrls: ['./reqeust-preveiw.component.css']
})
export class ReqeustPreveiwComponent implements OnInit {

  selectedRequest = [];
  //selectedDriver  = [];
  //selectedVehicle = [];
  isChangeOccured = 0; // 0 -> nothing occured, 1 -> request is changed

  constructor(
                @Inject(MAT_DIALOG_DATA) public data: any,
                private dialog: MatDialog,
                private requestService: RequestService,
                private requestDialogRef: MatDialogRef<ReqeustPreveiwComponent>
              ) {

    console.log("req data",data);
    this.selectedRequest = data;
   }

  ngOnInit() {
  }

  addDriver(refNo) {
    const dialogRef = this.dialog.open(AddDriverComponent, {
        id: "dialogAddDriver",
        data: {
          'refNo': refNo
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result['status']) {
        this.selectedRequest['driver'] = result['driver'];
        this.isChangeOccured = 1; // change happend to reqeust
      }
    });
  }

  addVehicle(refNo) {
    const dialogRef = this.dialog.open(AddVehicleToReqComponent, {
      id: "dialogAddVehicle",
      data: {
        'refNo': refNo
      }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result:`, result);
        if(result['status']) {
          this.selectedRequest['vehicle'] = result['vehicle'];
          this.selectedRequest['driver'] = result['driver'];
          this.isChangeOccured = 1; // change happend to reqeust
        }
      });
  }

  // load edit request window
  loadEditWindow() {
    const dialogRef = this.dialog.open(EditRequestComponent, {
      id: 'dialogEditRequest',
      width: '90%',
      data: this.selectedRequest
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result === 1) {
        this.requestDialogRef.close(1);
        //this.changeEmitter.emit(1); // when any change occur to request by dialog activity
      }
    });
  }

  rejectRequest(refNo) {
    this.requestService.change_status(refNo, 4)
      .subscribe( (response) => {
        console.log(response['msg']);
        this.selectedRequest['status'] = 3;

        this.isChangeOccured = 1;
      });
  }

  acceptRequest(refNo) {
    this.requestService.change_status(refNo, 1)
      .subscribe( (response) => {
        console.log(response['msg']);
        this.selectedRequest['status'] = 1;

        this.isChangeOccured = 1;
        //location.reload();
      });

  }


  markDocumentedRequest(refNo) {
    this.requestService.change_status(refNo, 3)
      .subscribe( response => {
        //alert('daon');
        console.log(response['msg']);
        this.selectedRequest['status'] = 4;

        this.isChangeOccured = 1;
      });
  }

  printGatePass(request) {
    let content = `
    <div #pdf style="width: 210mm;height: 148mm;font-size:12px; padding: 7px; border:1px solid black;">

    <h5 style="text-align: center;"><strong>කැළණිය විශ්ව විද්&zwj;යාලය</strong></h5>

    <p style="text-align: center;"><strong>වාහන ධාවන අවසර පත්&zwj;රය</strong></p>
    <p>ආරක්ෂක නිළධාරීතුමණි,</p>
    <table style="height: 20px; border-color: null;" border="0" width="685">
      <tbody>
      <tr>
        <td style="width: 335.2px;" >වාහන අංකය: ${request['vehicle']['vehicle_no']}</td>
        <td style="width: 335.2px;">රියදුරුගේ නම : ${request['driver'].name}</td>
      </tr>
      <tr>
        <td style="width: 335.2px;">අංශය/පීඨය&nbsp; : ${request['dep_unit']}</td>
        <td style="width: 335.2px;">&nbsp;</td>
      </tr>
      </tbody>
    </table>
    <p style="text-align: center;"><strong>ඉහත සදහන් වාහනය රාජකාරී කටයුතු සදහා යොදවා ඇති බැවින් වාහනය පිටවීමට අවසර ලබා දෙන්න.</strong></p>
    <ul>
      <li>වාහනය යන ස්ථානය : ${request.departure.dropPoint}</li>
      <li>රාජකාරී විස්තරය&nbsp; &nbsp; &nbsp; : ${request.purpose}li>
    </ul>
    <table>
      <tbody>
      <tr>
        <td width="350">පිටත්වන දිනය&nbsp; &nbsp; &nbsp;: ${request.departure.pickupDate}</td>
        <td width="350">ආපසු පැමිණෙන දිනය: ${request.arrival.dropDate}</td>
      </tr>
      <tr>
        <td width="350">වේලාව : ${request.departure.pickupTime}</td>
        <td width="350">වේලාව &nbsp; &nbsp; &nbsp; : ${request.arrival.dropTime}</td>
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
