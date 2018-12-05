import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { AddDriverComponent } from '../add-driver/add-driver.component';

@Component({
  selector: 'app-reqeust-preveiw',
  templateUrl: './reqeust-preveiw.component.html',
  styleUrls: ['./reqeust-preveiw.component.css']
})
export class ReqeustPreveiwComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    console.log("req data",data);
   }

  ngOnInit() {
  }

  addDriver() {
    const dialogRef = this.dialog.open(AddDriverComponent, {
        id: "dialogAddDriver"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
