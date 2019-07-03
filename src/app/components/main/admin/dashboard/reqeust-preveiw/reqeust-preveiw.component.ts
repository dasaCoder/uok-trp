import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
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
                private requestDialogRef: MatDialogRef<ReqeustPreveiwComponent>,
                private snackBar: MatSnackBar
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

  // open the snack bar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

  // print pdf
  // printApplication(refNo) {
  //   let url = `https://storage.googleapis.com/uok-trp/${refNo}.pdf`;
  //   window.open(url, "_blank");
  // }

  rejectRequest(refNo) {
    this.requestService.change_status(refNo, 5)
      .subscribe( (response) => {
        console.log(response['msg']);
        this.selectedRequest['status'] = 5;
        this.openSnackBar("Rejected Successfully!", "Got it!");
        this.isChangeOccured = 1;
      });
  }

  acceptRequest(refNo) {
    this.requestService.change_status(refNo, 1)
      .subscribe( (response) => {
        console.log(response['msg']);
        this.selectedRequest['status'] = 1;
        this.openSnackBar("Accepted Successfully!", "Got it!");

        this.isChangeOccured = 1;
        //location.reload();
      });

  }


  markDocumentedRequest(refNo) {
    this.requestService.change_status(refNo, 3)
      .subscribe( response => {
        //alert('daon');
        console.log(response['msg']);
        this.selectedRequest['status'] = 3;
        this.openSnackBar("Marked Successfully!", "Got it!");

        this.isChangeOccured = 1;
      });
  }

  completeRequest(refNo) {
    this.requestService.change_status(refNo, 4)
      .subscribe( response => {
        //alert('daon');
        console.log(response['msg']);
        this.selectedRequest['status'] = 4;
        this.openSnackBar("Marked Successfully!", "Got it!");

        this.isChangeOccured = 1;
      });
  }

  printGatePass(request) {
    let content = `
    <style>
      @page { size: auto;  margin: 0mm; }
    </style>
    <div #pdf style="width: 200mm;height: 280mm;font-size:12px; padding: 7px; border:1px solid black;">

    <h1 style="text-align: center;"><strong>කැළණිය විශ්ව විද්&zwj;යාලය</strong></h1>

    <h3 style="text-align: center;"><strong>වාහන ධාවන අවසර පත්&zwj;රය</strong></h3>
    <hr>
    <h3>ආරක්ෂක නිළධාරීතුමණි,</h3>
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
    <br>
    <h3 style="text-align: center;"><strong>ඉහත සදහන් වාහනය රාජකාරී කටයුතු සදහා යොදවා ඇති බැවින් වාහනය පිටවීමට අවසර ලබා දෙන්න.</strong></h3>
    <table>
      <tbody>
        <tr>
        <td>වාහනය යන ස්ථානය : ${request.departure.dropPoint}</td>
        
        </tr>
        <tr>
          <td>රාජකාරී විස්තරය&nbsp; &nbsp; &nbsp; : ${request.purpose}</td>
        </tr>
      </tbody>
      
    </table>
    <br>
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
        
      </tr>
      <tr style="height: 5px;">
        <td style="width: 202px; height: 5px;">
          <p>&nbsp;</p>
          <p>______________________</p>
        </td>
        <td style="width: 178px; height: 25px;">&nbsp;</td>      
        
      </tr>
      <tr style="height: 17px;">
        <td style="width: 202px; height: 17px;">රියදුරු මහතාගේ අත්සන</td>
        <td style="width: 178px; height: 17px;">&nbsp;</td>
        <td style="width: 301px; height: 17px;">&nbsp; &nbsp;</td>
      </tr>
      </tbody>
    </table>
<hr>
    <table style="height: 73px; width: 693px;">
      <tbody>
      <tr style="height: 25px;">
        <td style="width: 178px; height: 25px;">&nbsp;</td>
        <td style="width: 301px; height: 25px;">සටහන් තබා ගන්නා ආරක්ෂක නිලධාරීයාගේ,</td>
      </tr>
      <tr style="height: 5px;">
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
      
      </tbody>
    </table>

  </div>
    `;

        let newWin= window.open("");
        newWin.document.write(content);
        newWin.print();
        newWin.close();
  }

  printApplication(request) {
    let content = `
    <style>
    @page { size: auto;  margin: 0mm; padding:30px };
    td : {
      padding: 10px;
    }
  </style>
  <div #pdf style="width: 200mm;height: 280mm;font-size:12px; padding: 7px; border:1px solid black;">
  <h1 style="text-align: center;"><strong>Transport Division</strong></h1>
  <h2 style="text-align: center;"><strong>University of Kelaniya - Kelaniya</strong></h2>

  <h3 style="text-align: center;"><strong>Obtaining a Permission to Drive for a Official Journey</strong></h3>
  <hr>
 <br><br>
  <table style="height: 20px; border-color: null;" border="0" width="685">
    <tbody>
    <tr>
      <td style="width: 335.2px;" >Ref No :  ${request['refNo']}</td>
     
    </tr>
    <tr>
      <td style="">Applicant's Name : ${request['lecturer']}</td>
    </tr>
    <tr>
      <td style="width: 335.2px;">Applicant's Designation&nbsp; : ${request['position']}</td>
      
    </tr>
    <tr>
      <td style="">Faculaty / Department&nbsp; : ${request['dep_unit']}</td>
      
    </tr>
    </tbody>
  </table>
  <br>
  <hr>
 
  <h2> Details of the journey </h2>
  <table>
    <tbody>
      <tr>
      <td>Starting point : ${request.departure.pickupPoint}</td>
      
      </tr>
      <tr>
        <td>Destination&nbsp; &nbsp; &nbsp; : ${request.departure.dropPoint}</td>
      </tr>
    </tbody>
    
  </table>
  <br>
  <table>
    <tbody>
    <tr>
      <td width="350">Date of departure&nbsp; &nbsp; &nbsp;: ${request.departure.pickupDate}</td>
      <td width="350">Date of arrival: ${request.arrival.dropDate}</td>
    </tr>
    <tr>
      <td width="350">Time : ${request.departure.pickupTime}</td>
      <td width="350">Time &nbsp; &nbsp; &nbsp; : ${request.arrival.dropTime}</td>
    </tr>
<br>
    <tr>
      <td>Number of passangers : ${request.num_passangers}</td>
    </tr>
    <tr>
      <td>Purpose : ${request.purpose}</td>
    </tr>

    <tr>
      <td>Funding method : ${request.fundingWay}</td>
    </tr>
   
    </tbody>
  </table>
  <p>&nbsp;</p>
  <hr />
  <table style="height: 73px; width: 693px;">
    <tbody>
    <tr style="height: 25px;">
    <br>
      <td style="width: 202px; height: 25px;">Date&nbsp :</td>
      <td style="width: 178px; height: 25px;">&nbsp;</td>
      
    </tr>
    <tr style="height: 5px;text-align:center">
      <td style="width: 202px; height: 5px;">
        <p>&nbsp;</p>
        <p>______________________</p>
      </td>
      <td style="width: 202px; height: 5px;">
        <p>&nbsp;</p>
        <p>______________________</p>
      </td>
      <td style="width: 178px; height: 25px;">&nbsp;</td>      
      
    </tr>
    <tr style="height: 17px;">
      <td style="width: 202px; height: 17px;text-align:center"> Applicant's signature</td>
      <td style="width: 202px; height: 17px;text-align:center">  Dean/ Unit head</td>
      <td style="width: 178px; height: 17px;">&nbsp;</td>
      <td style="width: 301px; height: 17px;">&nbsp; &nbsp;</td>
    </tr>
    </tbody>
  </table>
<hr>


</div>
 
`;

        let newWin= window.open("");
        newWin.document.write(content);
        newWin.print();
        newWin.close();
  }
}
