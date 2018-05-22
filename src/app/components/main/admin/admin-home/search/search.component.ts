import { Component, OnInit } from '@angular/core';
import {DateModel} from '../../../home/notice/notice.component';
import {AdminService} from '../../../../../services/admin.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedDate = new Date();
  formatedDate;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  picker() {
    this.formatedDate = `${this.selectedDate.getFullYear()}-${this.selectedDate.getMonth() + 1}-${this.selectedDate.getDate()}`;
    this.adminService.getRequestListOnDay(this.formatedDate)
      .subscribe(response => {
        console.log(response['data']);
      })
    //console.log(this.formatedDate);
  }


}
