import { Component, OnInit } from '@angular/core';
import {DateModel} from '../../../home/notice/notice.component';
import {AdminService} from '../../../../../services/admin.service';
import {RequestService} from '../../../../../services/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedDate = new Date();
  formatedDate;

  searchResult;

  constructor(private adminService: AdminService, private requestService: RequestService) { }

  ngOnInit() {
  }

  picker() {
    this.formatedDate = `${this.selectedDate.getFullYear()}-${this.selectedDate.getMonth() + 1}-${this.selectedDate.getDate()}`;
    this.adminService.getRequestListOnDay(this.formatedDate)
      .subscribe(response => {
          this.searchResult = response['data'];
          console.log(response['data']);
        // console.log(this.searchResult);
      });
  }

  search (key) {
    if (!isNaN(key) && key) {
      this.requestService.getOneRequest(key)
        .subscribe(resp => {
          this.searchResult = resp['msg'];
        });
    }

  }


}
