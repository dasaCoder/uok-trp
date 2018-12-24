import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { AddDriverComponent } from '../add-driver/add-driver.component';
import { RequestService } from '../../../../../services/request.service';
import { AddVehicleToReqComponent } from '../add-vehicle-to-req/add-vehicle-to-req.component';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private requestService: RequestService) {
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
        console.log(`Dialog result: ${result}`);
        if(result['status']) {
          this.selectedRequest['vehicle'] = result['vehicle'];
          this.isChangeOccured = 1; // change happend to reqeust
        }
      });
  }

  rejectRequest(refNo) {
    this.requestService.change_status(refNo, 3)
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
    this.requestService.change_status(refNo, 4)
      .subscribe( response => {
        //alert('daon');
        console.log(response['msg']);
        this.selectedRequest['status'] = 4;

        this.isChangeOccured = 1;
      });
  }

  printPdf(request) {
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
                
                    <div class="col-12">අංකය	:&nbsp;	TRD/${request.refNo}</div>
                    <div class="col-12">පීඨය	:	&nbsp;${request.dep_unit}</div>
                    <div class="col-12">ඉල්ලුම්කරුගේ නම  :  ${request.name}</div>
                    <div class="col-12">ඉල්ලුම්කරුගේ තනතුර	:&nbsp;	${request.position}</div>
                    
                    <br><br>
                    <div class="col-12" style="border-bottom: 1px solid #000000;">චාරිකාව පිළිබද</div>
                    
                    <div class="col-12" style="padding-top: 10px">ආරම්භක ස්ථානය	:&nbsp;	${request.departure.pickPointAddress}</div>
                    <div class="col-12">ගමනාන්තය		:&nbsp;	${request.departure.dropPointAddress}</div>
                
                <br><br>
                      <div class="col-8">පිටත්වන දිනය :&nbsp; ${request.departure.pickupDate}</div>
                      <div class="col-4">වේලාව &nbsp; &nbsp; &nbsp; : &nbsp;${request.departure.pickupTime}</div>
                    
                      <div class="col-8">ආපසු පැමිණෙන දිනය:&nbsp; ${request.arrival.dropDate}</div>
                      
                      <div class="col-4">වේලාව &nbsp; &nbsp; &nbsp; :&nbsp; ${request.arrival.dropTime}</div>
           
                     <br><br>
                   
                    <div class="col-6">හේතුව	&nbsp; &nbsp; &nbsp;		:&nbsp;	${request.purpose}</div>
                  
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
