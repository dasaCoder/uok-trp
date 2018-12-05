import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { AddDriverComponent } from '../add-driver/add-driver.component';

@Component({
  selector: 'app-reqeust-preveiw',
  templateUrl: './reqeust-preveiw.component.html',
  styleUrls: ['./reqeust-preveiw.component.css']
})
export class ReqeustPreveiwComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

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
